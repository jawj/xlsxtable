
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

export function createXlsx(config: XlsxConfig): Promise<Uint8Array>;
