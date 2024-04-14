# xlsxtable

A small, simple library to create nice `.xlsx` Excel files from tabular data, which:

* Emboldens and (optionally) autofilters and freezes the headings
* Sets reasonable column widths
* Parses dates, times and datetimes to Excel format (roughly: floating-point days since 1 Jan 1900)

The only runtime dependency is [littlezipper](https://github.com/jawj/littlezipper) (which has no runtime dependencies of its own).

## How to say _xlsxtable_

Pronunciation is as close as possible to 'vegetable' or 'Whitstable'. That is: _ex-el-ess-EX-ta-bl_.

## Example usage

All cell values passed to the library must be strings. Any non-string values will be ignored.

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
  sheetName: 'Sheet 1',  // shown on the tab at the bottom
  freeze: true,          // freeze the top/header row
  autoFilter: true,      // enable autofilter for headers
  wrapText: true,        // wrap long text cells
  // metadata
  creator: 'Diane', 
  title: 'Blughupsnitch data',
  description: 'Data about the blughupsnitch',
  company: 'Dogoodnever Inc.',
})
  .then(xlsx => writeFileSync('/path/to/my.xlsx', xlsx));
```
