const xmlEscapeMap = { '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' } as const;
export const xmlesc = (s: string) => s.replace(/[<>&'"]/g, m => xmlEscapeMap[m as keyof typeof xmlEscapeMap]);

export const colRef = (colIndex: number) => {  // colIndex starts at zero
  let ref = '';
  for (; ;) {
    const remainder = colIndex % 26;
    ref = String.fromCharCode(65 + remainder) + ref;
    colIndex = (colIndex - remainder) / 26 - 1;  // minus 1 because AA (not BA) follows Z: this isn't quite base 26
    if (colIndex < 0) return ref;
  }
};
export const cellRef = (colIndex: number, rowIndex: number) => `${colRef(colIndex)}${rowIndex + 1}`;  // colIndex, rowIndex both start at zero

const excelEpochMs = Date.UTC(1899, 11, 31) / 1000 / 3600 / 24;  // Excel considers 1 Jan 1900 as day 1, so 31 Dec 1899 is day 0
export const excelDate = (d: Date, isUtc: boolean, isTime: boolean) => {
  let utcMs;
  if (isUtc) {
    if (isTime) d.setUTCFullYear(1899, 11, 31);  // Excel uses this date for time-only values
    utcMs = d.getTime();
    
  } else {
    // to match the provided date in local time, convert to a UTC date with the same wall clock date/time
    utcMs = Date.UTC(
      isTime ? 1899 : d.getFullYear(), isTime ? 11 : d.getMonth(), isTime ? 31 : d.getDate(),
      d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()
    );
  }
  let days = utcMs / 1000 / 3600 / 24 - excelEpochMs;
  if (days < 0) return undefined;
  if (days < 1 && !isTime) return undefined;  // Excel allows day zero for a time without a date
  if (days >= 60) days += 1;  // Excel wrongly considers 1900 a leap year: http://www.cpearson.com/excel/datetime.htm
  return days;
}
