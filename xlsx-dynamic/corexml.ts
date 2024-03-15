import { xmlesc } from '../utils';

interface CoreProps {
  title: string;
  description: string;
  creator: string;
  creationDate: Date;
}

export default ({ title, description, creator, creationDate }: CoreProps) => {
  const isoDate = creationDate.toISOString();

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties
  xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:dcterms="http://purl.org/dc/terms/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>${xmlesc(title)}</dc:title>
  <dc:description>${xmlesc(description)}</dc:description>
  <dc:creator>${xmlesc(creator)}</dc:creator>
  <cp:lastModifiedBy>${xmlesc(creator)}</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${isoDate}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${isoDate}</dcterms:modified>
</cp:coreProperties>`
};
