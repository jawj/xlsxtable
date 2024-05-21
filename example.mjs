import { createXlsx, XlsxTypes as Xl } from './index.mjs';
import { writeFileSync } from 'fs';

const now = new Date();

createXlsx({
  // sheet data
  headings: ['id', 'name', 'dob', 'wake_up', 'lastUpdated', 'notes'],
  types: [Xl.Number, Xl.String, Xl.LocalDate, Xl.LocalTime, Xl.LocalDateTime, Xl.String],
  data: [
    [1, 'Anna', new Date('1979-01-01'), new Date(0, 0, 0, 7), now, ''],
    [2, 'Bryn', new Date('1989-02-03'), new Date(0, 0, 0, 8), now, ''],
    [3, 'Chip', new Date('1999-03-04'), new Date(0, 0, 0, 9), now, '😆'],
    [4, 'Diane', undefined, undefined, undefined, undefined],
    [null, null, new Date('2009-04-05'), new Date(0, 0, 0, 10), now, ''],
    [6, 'Francis Ysidro Edgeworth', new Date('1899-04-05'), new Date(0, 0, 0, 11), now, 'Founding editor of the Economic Journal\nFrankie boy'],
  ],
  // options
  sheetName: 'People',   // shown on the tab at the bottom: limited character range allowed
  // metadata
  creator: 'Blughupsnitch', 
  title: 'Blughupsnitch data',
  description: 'Data about the blughupsnitch',
  company: 'Dogoodnever Inc.',
})
  .then(xlsx => writeFileSync('examples/my.xlsx', xlsx));
