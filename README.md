# xlsxtable

A small, simple library to create nice `.xlsx` Excel files from tabular data, which:

* Emboldens and (optionally) freezes and autofilters the headings
* Sets reasonable column widths
* Converts dates and times to native Excel format (roughly: floating-point days since 1 Jan 1900)
* Works everywhere, including Node and browsers

Under 7KB gzipped. The only runtime dependency is [littlezipper](https://github.com/jawj/littlezipper) (which is by the same author, tiny, and has no runtime dependencies of its own).

## How to say _xlsxtable_

Pronunciation is as close as possible to 'vegetable' or 'Whitstable'. That is: _ex-el-ess-EX-tuh-bl_.

## Types

The library supports Excel numbers, strings, dates/times, and empty cells.

* `XlsxTypes.String` values will be coerced to `string`.
* `XlsxTypes.Number` values must be provided as `number` or `string`.
* `XlsxTypes.LocalDate`/`XlsxTypes.UTCDate`, `XlsxTypes.LocalTime`/`XlsxTypes.UTCTime` and `XlsxTypes.LocalDateTime`/`XlsxTypes.UTCDateTime` values should be provided as `Date` objects, or `string` as a fallback (e.g. if the date is infinite or before 1900 or otherwise unsupported by Excel).
* `null` or `undefined` values result in an empty cell, no matter what type was specified for that column.

Excel has no concept of time zones, so the date and time types have local and UTC variants. The local variants produce a date or time that's the same as the one displayed by `date.toString()` (minus the local timezone information). Alternatively, the UTC variants produce a date or time that's the same as the one displayed by `date.toISOString()` (minus the `Z` that says it's UTC).

## Example usage

To write a file in Node:

```javascript
import { createXlsx, XlsxTypes as Xl } from 'xlsxtable';
import { writeFileSync } from 'fs';

const now = new Date();

createXlsx({
  // sheet data
  headings: ['id', 'name', 'dob', 'wake_up', 'lastUpdated'],
  types: [Xl.Number, Xl.String, Xl.LocalDate, Xl.LocalTime, Xl.LocalDateTime],
  data: [
    [1, 'Anna', new Date('1979-01-01'), new Date(0, 0, 0, 7), now],
    [2, 'Bryn', new Date('1989-02-03'), new Date(0, 0, 0, 8), now],
    [3, 'Chip', new Date('1999-03-04'), new Date(0, 0, 0, 9), now],
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

This produces [`my.xlsx`](my.xlsx):

![Screenshot](my.xlsx.png)

To provide a download in browsers, something like this works nicely:

```javascript
const xlsx = await createXlsx(/* ... */);

const url = URL.createObjectURL(new Blob([xlsx]));
const link = document.createElement('a');
link.style.display = 'none';
document.body.appendChild(link);
link.href = url;
link.download = 'my.xlsx';
link.click();
setTimeout(() => {
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
}, 0);
```

## License

[MIT licensed](LICENSE).
