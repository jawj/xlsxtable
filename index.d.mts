
export enum XlsxTypes {
  Number,
  String,
  LocalDate,
  LocalTime,
  LocalDateTime,
  UTCDate,
  UTCTime,
  UTCDateTime,
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

export function createXlsx(config: XlsxConfig): Promise<Uint8Array>;
