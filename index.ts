
import { createZip } from 'littlezipper';
import { xmlesc, cellRef, excelDate, ymdLocal, ymdUTC, longestLineLengthInString } from './utils';
import { contentTypesXml, relsXml, theme1Xml, workbookXmlRels } from './xlsx-static';
import appXml from './xlsx-dynamic/appxml';
import coreXml from './xlsx-dynamic/corexml';
import workbookXml from './xlsx-dynamic/workbookxml';
import stylesXml from './xlsx-dynamic/stylesxml';

export enum XlsxTypes {
  // note: owing to the logic used below, the order of these enum types must not be changed
  Number,
  String,
  LocalDate,
  LocalTime,
  LocalDateTime,
  UTCDate,
  UTCTime,
  UTCDateTime,
}

interface XlsxRequiredConfig {
  headings: string[];
  types: XlsxTypes[];
  data: any[][];
}

interface XlsxOptionalConfig {
  wrapText: boolean,
  freeze: boolean;
  autoFilter: boolean;
  sheetName: string;
  creator: string;
  title: string;
  description: string;
  company: string;
  minColWidth: number; // includes padWidth
  maxColWidth: number;  // includes padWidth
  padWidth: number;
  stringCharWidth: number;
}

interface XlsxConfig extends XlsxRequiredConfig, Partial<XlsxOptionalConfig> { }

const defaultConfig: XlsxOptionalConfig = {
  wrapText: true,
  freeze: true,
  autoFilter: true,
  sheetName: 'Sheet 1',
  creator: 'xlsxtable',
  title: '',
  description: '',
  company: '',
  minColWidth: 5, // includes padWidth
  maxColWidth: 50,  // includes padWidth
  padWidth: 2,  // allow this many characters at left or right of cell
  stringCharWidth: 1.1,  // all 'm's would be about 1.55, so this doesn't guarantee no wrapping
};

export const createXlsx = (config: XlsxConfig) => {
  const {
    headings, types, data,
    wrapText, freeze, autoFilter,
    creator, title, description, sheetName, company,
    minColWidth, maxColWidth, padWidth, stringCharWidth,
  } = { ...defaultConfig, ...config };

  const cols = headings.length;
  if (cols !== types.length || cols !== data[0].length) {
    throw new Error(`Number of headings (${cols}), types (${types.length}) and data columns (first row: ${data[0].length}) must be the same`);
  }

  const rows = data.length;
  const creationDate = new Date();

  const sharedStrings = new Map();
  let totalStringCount = 0;
  let uniqueStringCount = 0;

  const colWidths = [];

  const typeWidths = {
    [XlsxTypes.UTCDate]: 10 + padWidth,
    [XlsxTypes.UTCTime]: 8 + padWidth,
    [XlsxTypes.UTCDateTime]: 18 + padWidth,
    [XlsxTypes.LocalDate]: 10 + padWidth,
    [XlsxTypes.LocalTime]: 8 + padWidth,
    [XlsxTypes.LocalDateTime]: 18 + padWidth,
  }

  // start with heading lengths, clamped to min and max
  const headingPadWidth = padWidth + (autoFilter ? 2 : 0);  // extra space to allow for autofilter controls
  const maxHeaderStringChars = Math.ceil(maxColWidth / stringCharWidth) - headingPadWidth;
  for (let colIndex = 0; colIndex < cols; colIndex++) {
    const heading = headings[colIndex];
    const longestLineLength = longestLineLengthInString(heading, maxHeaderStringChars);
    const headingWidth = longestLineLength * stringCharWidth + headingPadWidth;
    colWidths[colIndex] =
      headingWidth < minColWidth ? minColWidth :
        headingWidth > maxColWidth ? maxColWidth :
          headingWidth;
  }

  // update for data rows
  const maxColStringChars = Math.ceil(maxColWidth / stringCharWidth) - padWidth;
  const maxColNumberChars = maxColWidth - padWidth;

  for (let colIndex = 0; colIndex < cols; colIndex++) {
    // if already at max width from column name, skip
    if (colWidths[colIndex] >= maxColWidth) continue;

    // check if there's a type-defined width
    const type = types[colIndex]
    const typeWidth = typeWidths[type as keyof typeof typeWidths];
    if (typeWidth !== undefined) {
      if (colWidths[colIndex] < typeWidth) colWidths[colIndex] = typeWidth;
      continue;  // no need to check multiple rows
    }

    // for a string column, check max line length within all strings
    if (type === XlsxTypes.String) {
      let longestLineLength = 0;
      for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        let cell = data[rowIndex][colIndex];
        if (cell == null /* or undefined */) continue;
        cell = String(cell);
        longestLineLength = longestLineLengthInString(cell, maxColStringChars);
        if (longestLineLength >= maxColStringChars) break;
      }
      const colWidth = longestLineLength * stringCharWidth + padWidth;
      if (colWidths[colIndex] < colWidth) colWidths[colIndex] = colWidth > maxColWidth ? maxColWidth : colWidth;

      // check max number length
    } else if (type === XlsxTypes.Number) {
      let longestNumLength = 0;
      for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        let cell = data[rowIndex][colIndex];
        if (cell == null /* or undefined */) continue;
        cell = String(cell);
        const numLength = cell.length;
        if (numLength > longestNumLength) longestNumLength = numLength;
        if (longestNumLength >= maxColNumberChars) break;
      }
      const colWidth = longestNumLength + padWidth;
      if (colWidths[colIndex] < colWidth) colWidths[colIndex] = colWidth > maxColWidth ? maxColWidth : colWidth;
    }
  }

  const colsXml = `<cols>${colWidths.map(
    (colWidth, colIndex) => `<col min="${colIndex + 1}" max="${colIndex + 1}" width="${Math.ceil(colWidth)}" bestFit="1" customWidth="1" />`).join('')
    }</cols>`;

  // currently we deal with headings separately, as inline strings
  const headingsXml = `<row r="1" spans="1:${cols}">${headings.map(
    (cell, colIndex) => `<c r="${cellRef(colIndex, 0)}" t="inlineStr" s="1"><is><t>${xmlesc(cell)}</t></is></c>`)
    .join('')}</row>`;

  const rowsXml = `${data.map((row, rowIndex) => `<row r="${rowIndex + 2}" spans="1:${cols}">${row.map(
    (cell, colIndex) => {
      if (cell == null /* or undefined */) return '';

      let type = types[colIndex];
      const isDateOrTime = type >= XlsxTypes.LocalDate;

      let styleIndex;
      if (isDateOrTime) {
        const isTime = type === XlsxTypes.UTCTime || type === XlsxTypes.LocalTime;
        const isDate = type === XlsxTypes.UTCDate || type === XlsxTypes.LocalDate;
        const isDateTime = !isDate && !isTime;
        const isUTC = type >= XlsxTypes.UTCDate;

        styleIndex = isTime ? 4 : isDate ? 3 : 2;

        if (cell instanceof Date) {
          cell = excelDate(cell, isUTC, isTime) ??  // for invalid dates, fall back to a string
            (isUTC ?
              ymdUTC(cell, isDate || isDateTime, isTime || isDateTime) :
              ymdLocal(cell, isDate || isDateTime, isTime || isDateTime)
            );
        }

        if (typeof cell === 'string') type = XlsxTypes.String;
      }

      if (type === XlsxTypes.String) {
        totalStringCount++;
        let stringIndex = sharedStrings.get(cell);
        if (stringIndex === undefined) {
          stringIndex = uniqueStringCount;
          sharedStrings.set(cell, stringIndex);
          uniqueStringCount++;
        }
        return `<c r="${cellRef(colIndex, rowIndex + 1)}" t="s"><v>${stringIndex}</v></c>`;
      }

      return `<c r="${cellRef(colIndex, rowIndex + 1)}"${styleIndex ? ` s="${styleIndex}"` : ''}><v>${cell}</v></c>`;
    }
  ).join('')}</row>`).join('')}`;

  const sharedStringsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="${totalStringCount}" uniqueCount="${uniqueStringCount}">
${[...sharedStrings].map(([k]) => `<si><t>${xmlesc(k)}</t></si>`).join('')}
</sst>`;

  const sheetXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet 
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  mc:Ignorable="xr"
  xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision"
  xr:uid="{${crypto.randomUUID()}}">
  <dimension ref="A1:${cellRef(cols - 1, rows)}" />
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      ${freeze ? `<pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen" />` : ''}
      <selection${freeze ? ` pane="bottomLeft"` : ''} activeCell="A2" sqref="A2" />
    </sheetView>
  </sheetViews>
  <sheetFormatPr baseColWidth="12" defaultRowHeight="16" />
${colsXml}
  <sheetData>
${headingsXml}
${rowsXml}
  </sheetData>
  ${autoFilter ? `<autoFilter ref="A1:${cellRef(cols - 1, 0)}" xr:uid="{3${crypto.randomUUID()}}" />` : ''}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" />
</worksheet>`;

  return createZip([
    { path: '[Content_Types].xml', data: contentTypesXml },
    { path: '_rels/.rels', data: relsXml },
    { path: 'xl/_rels/workbook.xml.rels', data: workbookXmlRels },
    { path: 'xl/workbook.xml', data: workbookXml({ sheetName }) },
    { path: 'xl/styles.xml', data: stylesXml({ wrapText }) },
    { path: 'xl/theme/theme1.xml', data: theme1Xml },
    { path: 'xl/sharedStrings.xml', data: sharedStringsXml },
    { path: 'xl/worksheets/sheet1.xml', data: sheetXml },
    { path: 'docProps/core.xml', data: coreXml({ title, description, creator, creationDate }) },
    { path: 'docProps/app.xml', data: appXml({ company }) },
  ]);
};
