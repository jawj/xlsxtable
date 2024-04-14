var W,se=()=>{let a=Int32Array,s=new a(256),p=new a(4096),o,l,n;for(l=0;l<256;l++)o=l,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,p[l]=s[l]=o&1?-306674912^o>>>1:o>>>1;for(l=0;l<256;l++)for(n=s[l],o=256+l;o<4096;o+=256)n=p[o]=n>>>8^s[n&255];for(W=[s],l=1;l<16;l++)W[l]=p.subarray(l*256,(l+1)*256)},re=(a,s=0)=>{W||se();let[p,o,l,n,E,$,A,P,k,T,L,t,e,I,m,y]=W,x=s^-1,S=a.length-15,i=0;for(;i<S;)x=y[a[i++]^x&255]^m[a[i++]^x>>8&255]^I[a[i++]^x>>16&255]^e[a[i++]^x>>>24]^t[a[i++]]^L[a[i++]]^T[a[i++]]^k[a[i++]]^P[a[i++]]^A[a[i++]]^$[a[i++]]^E[a[i++]]^n[a[i++]]^l[a[i++]]^o[a[i++]]^p[a[i++]];for(S+=15;i<S;)x=x>>>8^p[(x^a[i++])&255];return~x},le=typeof CompressionStream<"u",z=new TextEncoder,Y=a=>a.reduce((s,p)=>s+p.length,0),q=Uint8Array;function ne(a){let s=new CompressionStream("gzip"),p=s.writable.getWriter(),o=s.readable.getReader();return p.write(a),p.close(),()=>o.read()}async function Z(a,s=!0,p=ne){let o=[],l=le&&s,n=a.length,E=a.map(m=>z.encode(m.path)),$=a.map(({data:m})=>typeof m=="string"?z.encode(m):m instanceof ArrayBuffer?new q(m):m),A=Y($),P=Y(E),k=n*46+P,T=A+n*30+P+k+22,L=new Date,t=new q(T),e=0;for(let m=0;m<n;m++){o[m]=e;let y=E[m],x=y.length,S=$[m],i=S.length,M=a[m].lastModified??L,X=(M.getSeconds()/2|0)+(M.getMinutes()<<5)+(M.getHours()<<11),R=M.getDate()+(M.getMonth()+1<<5)+(M.getFullYear()-1980<<9),r=0,g=!1;t[e++]=80,t[e++]=75,t[e++]=3,t[e++]=4,t[e++]=20,t[e++]=0,t[e++]=0,t[e++]=8;let d=e;t[e++]=t[e++]=0,t[e++]=X&255,t[e++]=X>>8,t[e++]=R&255,t[e++]=R>>8;let c=e;if(e+=8,t[e++]=i&255,t[e++]=i>>8&255,t[e++]=i>>16&255,t[e++]=i>>24,t[e++]=x&255,t[e++]=x>>8,t[e++]=t[e++]=0,t.set(y,e),e+=x,l){let h=e,u=p(S),f,C=0,v=0;e:{for(;;){let b=await u();if(b.done)throw new Error("Bad gzip data");if(f=b.value,C=v,v=C+f.length,C<=3&&v>3&&f[3-C]&30){g=!0;break e}if(v>=10){f=f.subarray(10-C);break}}for(;;){let b=e-h,w=f.length;if(b+w>=i+8){g=!0;break e}t.set(f,e),e+=w;let O=await u();if(O.done)break;f=O.value}}if(g)for(;;){let b=f.length,w=8-b,O=e;e=h;for(let U=0;U<8;U++)t[e++]=U<w?t[O-w+U]:f[b-8+U];let K=await u();if(K.done)break;f=K.value}e-=8,t[c++]=t[e++],t[c++]=t[e++],t[c++]=t[e++],t[c++]=t[e++],e-=4,g||(t[d]=8,r=e-h)}if((!l||g)&&(t.set(S,e),e+=i,r=i),!l){let h=re(S);t[c++]=h&255,t[c++]=h>>8&255,t[c++]=h>>16&255,t[c++]=h>>24}t[c++]=r&255,t[c++]=r>>8&255,t[c++]=r>>16&255,t[c++]=r>>24}let I=e;for(let m=0;m<n;m++){let y=o[m],x=E[m],S=x.length;t[e++]=80,t[e++]=75,t[e++]=1,t[e++]=2,t[e++]=20,t[e++]=0,t[e++]=20,t[e++]=0,t.set(t.subarray(y+6,y+30),e),e+=24,t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=0,t[e++]=y&255,t[e++]=y>>8&255,t[e++]=y>>16&255,t[e++]=y>>24,t.set(x,e),e+=S}return t[e++]=80,t[e++]=75,t[e++]=5,t[e++]=6,t[e++]=t[e++]=t[e++]=t[e++]=0,t[e++]=n&255,t[e++]=n>>8,t[e++]=n&255,t[e++]=n>>8,t[e++]=k&255,t[e++]=k>>8&255,t[e++]=k>>16&255,t[e++]=k>>24,t[e++]=I&255,t[e++]=I>>8&255,t[e++]=I>>16&255,t[e++]=I>>24,t[e++]=t[e++]=0,t.subarray(0,e)}var ie={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'"':"&quot;"},F=a=>a.replace(/[<>&'"]/g,s=>ie[s]),ce=a=>{let s="";for(;;){let p=a%26;if(s=String.fromCharCode(65+p)+s,a=(a-p)/26-1,a<0)return s}},N=(a,s)=>`${ce(a)}${s+1}`,pe=Date.UTC(1899,11,31)/1e3/3600/24,_=a=>{let s=a.getTime()/1e3/3600/24-pe;if(!(s<1))return s>=60&&(s+=1),s};var H=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" />
  <Default Extension="xml" ContentType="application/xml" />
  <Override PartName="/xl/workbook.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" />
  <Override PartName="/xl/worksheets/sheet1.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" />
  <Override PartName="/xl/theme/theme1.xml"
    ContentType="application/vnd.openxmlformats-officedocument.theme+xml" />
  <Override PartName="/xl/styles.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" />
  <Override PartName="/xl/sharedStrings.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" />
  <Override PartName="/docProps/core.xml"
    ContentType="application/vnd.openxmlformats-package.core-properties+xml" />
  <Override PartName="/docProps/app.xml"
    ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" />
</Types>`;var j=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId3"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"
    Target="docProps/app.xml" />
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"
    Target="docProps/core.xml" />
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
    Target="xl/workbook.xml" />
</Relationships>`;var V=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">
  <a:themeElements>
    <a:clrScheme name="Office">
      <a:dk1>
        <a:sysClr val="windowText" lastClr="000000" />
      </a:dk1>
      <a:lt1>
        <a:sysClr val="window" lastClr="FFFFFF" />
      </a:lt1>
      <a:dk2>
        <a:srgbClr val="44546A" />
      </a:dk2>
      <a:lt2>
        <a:srgbClr val="E7E6E6" />
      </a:lt2>
      <a:accent1>
        <a:srgbClr val="4472C4" />
      </a:accent1>
      <a:accent2>
        <a:srgbClr val="ED7D31" />
      </a:accent2>
      <a:accent3>
        <a:srgbClr val="A5A5A5" />
      </a:accent3>
      <a:accent4>
        <a:srgbClr val="FFC000" />
      </a:accent4>
      <a:accent5>
        <a:srgbClr val="5B9BD5" />
      </a:accent5>
      <a:accent6>
        <a:srgbClr val="70AD47" />
      </a:accent6>
      <a:hlink>
        <a:srgbClr val="0563C1" />
      </a:hlink>
      <a:folHlink>
        <a:srgbClr val="954F72" />
      </a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="Office">
      <a:majorFont>
        <a:latin typeface="Calibri Light" panose="020F0302020204030204" />
        <a:ea typeface="" />
        <a:cs typeface="" />
        <a:font script="Jpan" typeface="\u6E38\u30B4\u30B7\u30C3\u30AF Light" />
        <a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515" />
        <a:font script="Hans" typeface="\u7B49\u7EBF Light" />
        <a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4" />
        <a:font script="Arab" typeface="Times New Roman" />
        <a:font script="Hebr" typeface="Times New Roman" />
        <a:font script="Thai" typeface="Tahoma" />
        <a:font script="Ethi" typeface="Nyala" />
        <a:font script="Beng" typeface="Vrinda" />
        <a:font script="Gujr" typeface="Shruti" />
        <a:font script="Khmr" typeface="MoolBoran" />
        <a:font script="Knda" typeface="Tunga" />
        <a:font script="Guru" typeface="Raavi" />
        <a:font script="Cans" typeface="Euphemia" />
        <a:font script="Cher" typeface="Plantagenet Cherokee" />
        <a:font script="Yiii" typeface="Microsoft Yi Baiti" />
        <a:font script="Tibt" typeface="Microsoft Himalaya" />
        <a:font script="Thaa" typeface="MV Boli" />
        <a:font script="Deva" typeface="Mangal" />
        <a:font script="Telu" typeface="Gautami" />
        <a:font script="Taml" typeface="Latha" />
        <a:font script="Syrc" typeface="Estrangelo Edessa" />
        <a:font script="Orya" typeface="Kalinga" />
        <a:font script="Mlym" typeface="Kartika" />
        <a:font script="Laoo" typeface="DokChampa" />
        <a:font script="Sinh" typeface="Iskoola Pota" />
        <a:font script="Mong" typeface="Mongolian Baiti" />
        <a:font script="Viet" typeface="Times New Roman" />
        <a:font script="Uigh" typeface="Microsoft Uighur" />
        <a:font script="Geor" typeface="Sylfaen" />
        <a:font script="Armn" typeface="Arial" />
        <a:font script="Bugi" typeface="Leelawadee UI" />
        <a:font script="Bopo" typeface="Microsoft JhengHei" />
        <a:font script="Java" typeface="Javanese Text" />
        <a:font script="Lisu" typeface="Segoe UI" />
        <a:font script="Mymr" typeface="Myanmar Text" />
        <a:font script="Nkoo" typeface="Ebrima" />
        <a:font script="Olck" typeface="Nirmala UI" />
        <a:font script="Osma" typeface="Ebrima" />
        <a:font script="Phag" typeface="Phagspa" />
        <a:font script="Syrn" typeface="Estrangelo Edessa" />
        <a:font script="Syrj" typeface="Estrangelo Edessa" />
        <a:font script="Syre" typeface="Estrangelo Edessa" />
        <a:font script="Sora" typeface="Nirmala UI" />
        <a:font script="Tale" typeface="Microsoft Tai Le" />
        <a:font script="Talu" typeface="Microsoft New Tai Lue" />
        <a:font script="Tfng" typeface="Ebrima" />
      </a:majorFont>
      <a:minorFont>
        <a:latin typeface="Calibri" panose="020F0502020204030204" />
        <a:ea typeface="" />
        <a:cs typeface="" />
        <a:font script="Jpan" typeface="\u6E38\u30B4\u30B7\u30C3\u30AF" />
        <a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515" />
        <a:font script="Hans" typeface="\u7B49\u7EBF" />
        <a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4" />
        <a:font script="Arab" typeface="Arial" />
        <a:font script="Hebr" typeface="Arial" />
        <a:font script="Thai" typeface="Tahoma" />
        <a:font script="Ethi" typeface="Nyala" />
        <a:font script="Beng" typeface="Vrinda" />
        <a:font script="Gujr" typeface="Shruti" />
        <a:font script="Khmr" typeface="DaunPenh" />
        <a:font script="Knda" typeface="Tunga" />
        <a:font script="Guru" typeface="Raavi" />
        <a:font script="Cans" typeface="Euphemia" />
        <a:font script="Cher" typeface="Plantagenet Cherokee" />
        <a:font script="Yiii" typeface="Microsoft Yi Baiti" />
        <a:font script="Tibt" typeface="Microsoft Himalaya" />
        <a:font script="Thaa" typeface="MV Boli" />
        <a:font script="Deva" typeface="Mangal" />
        <a:font script="Telu" typeface="Gautami" />
        <a:font script="Taml" typeface="Latha" />
        <a:font script="Syrc" typeface="Estrangelo Edessa" />
        <a:font script="Orya" typeface="Kalinga" />
        <a:font script="Mlym" typeface="Kartika" />
        <a:font script="Laoo" typeface="DokChampa" />
        <a:font script="Sinh" typeface="Iskoola Pota" />
        <a:font script="Mong" typeface="Mongolian Baiti" />
        <a:font script="Viet" typeface="Arial" />
        <a:font script="Uigh" typeface="Microsoft Uighur" />
        <a:font script="Geor" typeface="Sylfaen" />
        <a:font script="Armn" typeface="Arial" />
        <a:font script="Bugi" typeface="Leelawadee UI" />
        <a:font script="Bopo" typeface="Microsoft JhengHei" />
        <a:font script="Java" typeface="Javanese Text" />
        <a:font script="Lisu" typeface="Segoe UI" />
        <a:font script="Mymr" typeface="Myanmar Text" />
        <a:font script="Nkoo" typeface="Ebrima" />
        <a:font script="Olck" typeface="Nirmala UI" />
        <a:font script="Osma" typeface="Ebrima" />
        <a:font script="Phag" typeface="Phagspa" />
        <a:font script="Syrn" typeface="Estrangelo Edessa" />
        <a:font script="Syrj" typeface="Estrangelo Edessa" />
        <a:font script="Syre" typeface="Estrangelo Edessa" />
        <a:font script="Sora" typeface="Nirmala UI" />
        <a:font script="Tale" typeface="Microsoft Tai Le" />
        <a:font script="Talu" typeface="Microsoft New Tai Lue" />
        <a:font script="Tfng" typeface="Ebrima" />
      </a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="Office">
      <a:fillStyleLst>
        <a:solidFill>
          <a:schemeClr val="phClr" />
        </a:solidFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0">
              <a:schemeClr val="phClr">
                <a:lumMod val="110000" />
                <a:satMod val="105000" />
                <a:tint val="67000" />
              </a:schemeClr>
            </a:gs>
            <a:gs pos="50000">
              <a:schemeClr val="phClr">
                <a:lumMod val="105000" />
                <a:satMod val="103000" />
                <a:tint val="73000" />
              </a:schemeClr>
            </a:gs>
            <a:gs pos="100000">
              <a:schemeClr val="phClr">
                <a:lumMod val="105000" />
                <a:satMod val="109000" />
                <a:tint val="81000" />
              </a:schemeClr>
            </a:gs>
          </a:gsLst>
          <a:lin ang="5400000" scaled="0" />
        </a:gradFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0">
              <a:schemeClr val="phClr">
                <a:satMod val="103000" />
                <a:lumMod val="102000" />
                <a:tint val="94000" />
              </a:schemeClr>
            </a:gs>
            <a:gs pos="50000">
              <a:schemeClr val="phClr">
                <a:satMod val="110000" />
                <a:lumMod val="100000" />
                <a:shade val="100000" />
              </a:schemeClr>
            </a:gs>
            <a:gs pos="100000">
              <a:schemeClr val="phClr">
                <a:lumMod val="99000" />
                <a:satMod val="120000" />
                <a:shade val="78000" />
              </a:schemeClr>
            </a:gs>
          </a:gsLst>
          <a:lin ang="5400000" scaled="0" />
        </a:gradFill>
      </a:fillStyleLst>
      <a:lnStyleLst>
        <a:ln w="6350" cap="flat" cmpd="sng" algn="ctr">
          <a:solidFill>
            <a:schemeClr val="phClr" />
          </a:solidFill>
          <a:prstDash val="solid" />
          <a:miter lim="800000" />
        </a:ln>
        <a:ln w="12700" cap="flat" cmpd="sng" algn="ctr">
          <a:solidFill>
            <a:schemeClr val="phClr" />
          </a:solidFill>
          <a:prstDash val="solid" />
          <a:miter lim="800000" />
        </a:ln>
        <a:ln w="19050" cap="flat" cmpd="sng" algn="ctr">
          <a:solidFill>
            <a:schemeClr val="phClr" />
          </a:solidFill>
          <a:prstDash val="solid" />
          <a:miter lim="800000" />
        </a:ln>
      </a:lnStyleLst>
      <a:effectStyleLst>
        <a:effectStyle>
          <a:effectLst />
        </a:effectStyle>
        <a:effectStyle>
          <a:effectLst />
        </a:effectStyle>
        <a:effectStyle>
          <a:effectLst>
            <a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0">
              <a:srgbClr val="000000">
                <a:alpha val="63000" />
              </a:srgbClr>
            </a:outerShdw>
          </a:effectLst>
        </a:effectStyle>
      </a:effectStyleLst>
      <a:bgFillStyleLst>
        <a:solidFill>
          <a:schemeClr val="phClr" />
        </a:solidFill>
        <a:solidFill>
          <a:schemeClr val="phClr">
            <a:tint val="95000" />
            <a:satMod val="170000" />
          </a:schemeClr>
        </a:solidFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0">
              <a:schemeClr val="phClr">
                <a:tint val="93000" />
                <a:satMod val="150000" />
                <a:shade val="98000" />
                <a:lumMod val="102000" />
              </a:schemeClr>
            </a:gs>
            <a:gs pos="50000">
              <a:schemeClr val="phClr">
                <a:tint val="98000" />
                <a:satMod val="130000" />
                <a:shade val="90000" />
                <a:lumMod val="103000" />
              </a:schemeClr>
            </a:gs>
            <a:gs pos="100000">
              <a:schemeClr val="phClr">
                <a:shade val="63000" />
                <a:satMod val="120000" />
              </a:schemeClr>
            </a:gs>
          </a:gsLst>
          <a:lin ang="5400000" scaled="0" />
        </a:gradFill>
      </a:bgFillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
  <a:objectDefaults />
  <a:extraClrSchemeLst />
  <a:extLst>
    <a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}">
      <thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main"
        name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}"
        vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}" />
    </a:ext>
  </a:extLst>
</a:theme>`;var G=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId4"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
    Target="sharedStrings.xml" />
  <Relationship Id="rId3"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
    Target="styles.xml" />
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"
    Target="theme/theme1.xml" />
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet1.xml" />
</Relationships>`;var Q=({company:a})=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
  <Company>${F(a)}</Company>
</Properties>`;var ee=({title:a,description:s,creator:p,creationDate:o})=>{let l=o.toISOString();return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties
  xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:dcterms="http://purl.org/dc/terms/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>${F(a)}</dc:title>
  <dc:description>${F(s)}</dc:description>
  <dc:creator>${F(p)}</dc:creator>
  <cp:lastModifiedBy>${F(p)}</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${l}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${l}</dcterms:modified>
</cp:coreProperties>`};var te=({sheetName:a})=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7" rupBuild="10211" />
  <workbookPr defaultThemeVersion="166925" />
  <sheets>
    <sheet name="${F(a)}" sheetId="1" r:id="rId1" />
  </sheets>
  <calcPr calcId="181029" />
</workbook>`;var ae=({wrapText:a})=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  mc:Ignorable="x14ac x16r2 xr"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"
  xmlns:x16r2="http://schemas.microsoft.com/office/spreadsheetml/2015/02/main"
  xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision">
  <numFmts count="3">
    <numFmt numFmtId="164" formatCode="yyyy-mm-dd hh:mm:ss" />
    <numFmt numFmtId="165" formatCode="yyyy-mm-dd" />
    <numFmt numFmtId="166" formatCode="h:mm:ss" />
  </numFmts>
  <fonts count="2" x14ac:knownFonts="1">
    <font>
      <sz val="14" />
      <color theme="1" />
      <name val="Calibri" />
      <family val="2" />
      <scheme val="minor" />
    </font>
    <font>
      <b />
      <sz val="14" />
      <color theme="1" />
      <name val="Calibri" />
      <family val="2" />
      <scheme val="minor" />
    </font>
  </fonts>
  <fills count="1">
    <fill>
      <patternFill patternType="none" />
    </fill>
  </fills>
  <borders count="2">
    <border>
      <left />
      <right />
      <top />
      <bottom />
      <diagonal />
    </border>
    <border>
      <left />
      <right />
      <top />
      <bottom style="medium">
        <color indexed="64" />
      </bottom>
      <diagonal />
    </border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" />
  </cellStyleXfs>
  <cellXfs count="4">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"><alignment wrapText="${a}" /></xf>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" />
    <xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" />
    <xf numFmtId="165" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" />
    <xf numFmtId="166" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" />
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0" />
  </cellStyles>
  <dxfs count="0" />
  <tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleLight16" />
  <extLst>
    <ext uri="{EB79DEF2-80B8-43e5-95BD-54CBDDF9020C}"
      xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main">
      <x14:slicerStyles defaultSlicerStyle="SlicerStyleLight1" />
    </ext>
    <ext uri="{9260A510-F301-46a8-8635-F512D64BE5F5}"
      xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main">
      <x15:timelineStyles defaultTimelineStyle="TimeSlicerStyleLight1" />
    </ext>
  </extLst>
</styleSheet>`;var ye=(n=>(n[n.Number=0]="Number",n[n.String=1]="String",n[n.DateTime=2]="DateTime",n[n.Date=3]="Date",n[n.Time=4]="Time",n))(ye||{}),ge={4:!0,3:!0,2:!0},xe={4:10,3:12,2:20},oe=6,D=42,B=2,J=1.1,ue=Math.ceil(D/J)-B,Ce=D-B,Ge=({headings:a,types:s,data:p,wrapText:o,freeze:l,autoFilter:n,creator:E,title:$,description:A,sheetName:P,company:k})=>{let T=a.length;if(T!==s.length||T!==p[0].length)throw new Error("Number of headings, types and data columns must match");let L=p.length,t=new Date,e=new Map,I=0,m=0,y=[],x=B+(n?2:0);for(let r=0;r<T;r++){let d=a[r].length*J+x;y[r]=d<oe?oe:d>D?D:d}for(let r=0;r<T;r++){if(y[r]>=D)continue;let g=s[r],d=xe[g];if(d!==void 0){y[r]<d&&(y[r]=d);continue}if(g===1){let c=0;for(let u=0;u<L;u++){let f=p[u][r];if(typeof f!="string")continue;let C=-1,v,b=f.length;for(;;){v=f.indexOf(`
`,C+1),v===-1&&(v=b);let w=v-C;if(w>c&&(c=w),v===b)break;C=v}if(c>=ue)break}let h=c*J+B;y[r]<h&&(y[r]=h>D?D:h)}else if(g===0){let c=0;for(let u=0;u<L;u++){let f=p[u][r];if(typeof f!="string")continue;let C=f.length;if(C>c&&(c=C),c>=Ce)break}let h=c+B;y[r]<h&&(y[r]=h>D?D:h)}}let S=`<cols>${y.map((r,g)=>`<col min="${g+1}" max="${g+1}" width="${Math.ceil(r)}" bestFit="1" customWidth="1" />`).join("")}</cols>`,i=`<row r="1" spans="1:${T}">${a.map((r,g)=>`<c r="${N(g,0)}" t="inlineStr" s="1"><is><t>${F(r)}</t></is></c>`).join("")}</row>`,M=`${p.map((r,g)=>`<row r="${g+2}" spans="1:${T}">${r.map((d,c)=>{if(typeof d!="string")return"";let h=s[c],u;if(h in ge){let f=d;if(h===4){u=4;let[C,v,b]=d.split(":").map(w=>+w);d=new Date(Date.UTC(1900,0,1,C,v,b))}else if(h===3){u=3;let[C,v,b]=d.split("-").map(w=>+w);d=new Date(Date.UTC(C,v-1,b))}else u=2,d=new Date(Date.parse(d));d=_(d)??f,typeof d=="string"&&(h=1)}if(h===1){I++;let f=e.get(d);return f===void 0&&(f=m,e.set(d,f),m++),`<c r="${N(c,g+1)}" t="s"><v>${f}</v></c>`}return`<c r="${N(c,g+1)}"${u?` s="${u}"`:""}><v>${d}</v></c>`}).join("")}</row>`).join("")}`,X=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="${I}" uniqueCount="${m}">
${[...e].map(([r])=>`<si><t>${F(r)}</t></si>`).join("")}
</sst>`,R=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet 
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  mc:Ignorable="xr"
  xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision"
  xr:uid="{${crypto.randomUUID()}}">
  <dimension ref="A1:${N(T-1,L)}" />
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      ${l?'<pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen" />':""}
      <selection${l?' pane="bottomLeft"':""} activeCell="A2" sqref="A2" />
    </sheetView>
  </sheetViews>
  <sheetFormatPr baseColWidth="12" defaultRowHeight="16" />
${S}
  <sheetData>
${i}
${M}
  </sheetData>
  ${n?`<autoFilter ref="A1:${N(T-1,0)}" xr:uid="{3${crypto.randomUUID()}}" />`:""}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" />
</worksheet>`;return Z([{path:"[Content_Types].xml",data:H},{path:"_rels/.rels",data:j},{path:"xl/_rels/workbook.xml.rels",data:G},{path:"xl/workbook.xml",data:te({sheetName:P})},{path:"xl/styles.xml",data:ae({wrapText:o})},{path:"xl/theme/theme1.xml",data:V},{path:"xl/sharedStrings.xml",data:X},{path:"xl/worksheets/sheet1.xml",data:R},{path:"docProps/core.xml",data:ee({title:$,description:A,creator:E,creationDate:t})},{path:"docProps/app.xml",data:Q({company:k})}])};export{ye as XlsxTypes,Ge as createXlsx};
