# xlsxtable

A small, simple library to create nice `.xlsx` Excel files from tabular data, which:

* Emboldens and (optionally) autofilters and freezes the headings
* Sets reasonable column widths
* Converts dates and times to native Excel format (roughly: floating-point days since 1 Jan 1900)

The only runtime dependency is [littlezipper](https://github.com/jawj/littlezipper) (which has no runtime dependencies of its own).

## How to say _xlsxtable_

Pronunciation is as close as possible to 'vegetable' or 'Whitstable'. That is: _ex-el-ess-EX-ta-bl_.

## Types

* `XlsxTypes.String` values will be coerced to `string`.
* `XlsxTypes.Number` values must be provided as `number` or `string`.
* `XlsxTypes.Date`, `XlsxTypes.Time` and `XlsxTypes.DateTime` values must be provided as `Date` objects. 
* `null` or `undefined` values result in an empty cell for all `XlsxTypes`.

## Example usage

```javascript
import { createXlsx, XlsxTypes } from 'xlsxtable';
import { writeFileSync } from 'fs';

const now = new Date();

createXlsx({
  // sheet data
  headings: ['id', 'name', 'dob', 'lastUpdated'],
  types: [XlsxTypes.Number, XlsxTypes.String, XlsxTypes.Date, XlsxTypes.DateTime],
  data: [
    [1, 'Anna', new Date('1979-01-01'), now],
    [2, 'Bryn', new Date('1979-01-02'), now],
    [null, null, null, null],
    [3, 'Chip', new Date('1979-01-03'), now],    
  ],
  // options
  sheetName: 'Sheet 1',  // shown on the tab at the bottom: limited character range allowed
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
