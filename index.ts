
import { createZip } from 'littlezip';

// @ts-ignore
import contentTypes from './xlsx-static/content-types.xml';
// @ts-ignore
import rels from './xlsx-static/_rels.xml';
// @ts-ignore
import theme1 from './xlsx-static/theme1.xml';
// @ts-ignore
import styles from './xlsx-static/styles.xml';
// @ts-ignore
import workbookrels from './xlsx-static/workbook-rels.xml';

function colRef(colIndex: number) {
  // note: this is not simple base 26, since AA (not BA) comes after Z
  let ref = '';
  while (colIndex !== -1) {
    const remainder = colIndex % 26;
    ref = String.fromCharCode(65 + remainder) + ref;
    colIndex = (colIndex - remainder) / 26 - 1;
  };
  return ref;
}

function cellRef(colIndex: number, rowIndex: number) {
  return `${colRef(colIndex)}${rowIndex + 1}`;
}

function xmlesc(s: string) {
  return s.replace(/[<>&'"]/g, m => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[m]!);
}

export function createXlsx({ creator, title, description, sheetName, company, data }: { creator: string; title: string; description: string; sheetName: string; company: string; data: any[][] }) {
  const now = new Date().toISOString();

  const appxml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
  <Company>${xmlesc(company)}</Company>
</Properties>`;

  const corexml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties
  xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:dcterms="http://purl.org/dc/terms/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>${xmlesc(title)}</dc:title>
  <dc:description>${xmlesc(description)}</dc:description>
  <dc:creator>${xmlesc(creator)}</dc:creator>
  <cp:lastModifiedBy>${xmlesc(creator)}</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${now}</dcterms:modified>
</cp:coreProperties>`;

  const workbookxml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7" rupBuild="10211" />
  <workbookPr defaultThemeVersion="166925" />
  <sheets>
    <sheet name="${xmlesc(sheetName)}" sheetId="1" r:id="rId1" />
  </sheets>
  <calcPr calcId="181029" />
</workbook>`;

  const headings = data[0];
  const body = data.slice(1);
  const rows = `
    <row r="1" spans="1:${headings.length}" s="1" customFormat="1">
      ${headings.map((h, j) => `
      <c r="${cellRef(j, 0)}" s="1" t="inlineStr"><is><t>${xmlesc(h)}</t></is></c>`).join('')}
    </row>
    ${body.map((row, i) => `
    <row r="${i + 2}" spans="1:${row.length}">
      ${row.map((cell, j) => `
      <c r="${cellRef(j, i + 1)}"><v>${cell}</v></c>`).join('')}
    </row>`).join('')}`;

  const sheet1xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet 
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  mc:Ignorable="xr"
  xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision"
  xr:uid="{${crypto.randomUUID()}}">
  <dimension ref="A1:C2" />
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <selection sqref="A1:A1" />
    </sheetView>
  </sheetViews>
  <sheetFormatPr baseColWidth="12" defaultRowHeight="16" />
  <sheetData>${rows}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" />
</worksheet>`;

  return createZip([
    { path: '[Content_Types].xml', data: contentTypes },
    { path: '_rels/.rels', data: rels },
    { path: 'xl/_rels/workbook.xml.rels', data: workbookrels },
    { path: 'xl/workbook.xml', data: workbookxml },
    { path: 'xl/styles.xml', data: styles },
    { path: 'xl/theme/theme1.xml', data: theme1 },
    { path: 'xl/worksheets/sheet1.xml', data: sheet1xml },
    { path: 'docProps/core.xml', data: corexml },
    { path: 'docProps/app.xml', data: appxml },
  ]);
}
