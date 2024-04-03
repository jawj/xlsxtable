
export enum XlsxTypes {
  Number,
  String,
  DateTime,
  Date,
  Time,
}

export interface XlsxConfig {
  headings: string[];
  types: XlsxTypes[];
  data: any[][];
  wrapText: boolean,
  freeze: boolean;
  autoFilter: boolean;
  sheetName: string;
  creator: string;
  title: string;
  description: string;
  company: string;
}

export const createXlsx = (config: XlsxConfig) => Promise<Uint8Array>;
