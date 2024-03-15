import { xmlesc } from '../utils';

export default ({ company }: { company: string }) => `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
  <Company>${xmlesc(company)}</Company>
</Properties>`;
