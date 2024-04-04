# xlsxtable

A small, simple library to create nice `.xlsx` Excel files from tabular data.

Sets reasonable column widths. Bolds and (optionally) autofilters and freezes the headings.

Only runtime dependency is [littlezip](https://github.com/jawj/littlezip) (which has no runtime dependencies of its own).

## Example usage

```javascript
import { createXlsx, XlsxTypes } from 'xlsxtable';
import { writeFileSync } from 'fs';

createXlsx({
  // sheet data
  headings: ['identifier', 'name', 'dob', 'lastUpdated'],
  types: [XlsxTypes.Number, XlsxTypes.String, XlsxTypes.Date, XlsxTypes.DateTime],
  data: [
    ['1', 'Anna', '1979-01-01', '2024-03-14 20:14:25.34486+00'],
    ['2', 'Bryn', '1979-01-02', '2024-03-14 20:14:25.34486+00'],
    ['3', 'Chip', '1979-01-03', '2024-03-14 20:14:25.34486+00'],
  ],
  // options
  freeze: true,       // freeze the top/header row
  autoFilter: true,   // enable autofilter for headers
  wrapText: true,     // wrap long text cells
  // metadata
  creator: 'Diane', 
  title: 'Blughupsnitch data',
  description: 'Data about the blughupsnitch',
  sheetName: 'Sheet 1', 
  company: 'Dogoodnever Inc.',
})
  .then(xlsx => writeFileSync('/path/to/my.xlsx', xlsx));
```
