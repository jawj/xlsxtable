var W,se=()=>{let a=Int32Array,n=new a(256),l=new a(4096),o,s,u;for(s=0;s<256;s++)o=s,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,l[s]=n[s]=o&1?-306674912^o>>>1:o>>>1;for(s=0;s<256;s++)for(u=n[s],o=256+s;o<4096;o+=256)u=l[o]=u>>>8^n[u&255];for(W=[n],s=1;s<16;s++)W[s]=l.subarray(s*256,(s+1)*256)},re=(a,n=0)=>{W||se();let[l,o,s,u,E,U,d,P,k,b,$,t,e,I,m,h]=W,C=n^-1,S=a.length-15,i=0;for(;i<S;)C=h[a[i++]^C&255]^m[a[i++]^C>>8&255]^I[a[i++]^C>>16&255]^e[a[i++]^C>>>24]^t[a[i++]]^$[a[i++]]^b[a[i++]]^k[a[i++]]^P[a[i++]]^d[a[i++]]^U[a[i++]]^E[a[i++]]^u[a[i++]]^s[a[i++]]^o[a[i++]]^l[a[i++]];for(S+=15;i<S;)C=C>>>8^l[(C^a[i++])&255];return~C},le=typeof CompressionStream<"u",Y=new TextEncoder,z=a=>a.reduce((n,l)=>n+l.length,0),q=Uint8Array;function ne(a){let n=new CompressionStream("gzip"),l=n.writable.getWriter(),o=n.readable.getReader();return l.write(a),l.close(),()=>o.read()}async function Z(a,n=!0,l=ne){let o=[],s=le&&n,u=a.length,E=a.map(m=>Y.encode(m.path)),U=a.map(({data:m})=>typeof m=="string"?Y.encode(m):m instanceof ArrayBuffer?new q(m):m),d=z(U),P=z(E),k=u*46+P,b=d+u*30+P+k+22,$=new Date,t=new q(b),e=0;for(let m=0;m<u;m++){o[m]=e;let h=E[m],C=h.length,S=U[m],i=S.length,M=a[m].lastModified??$,X=(M.getSeconds()/2|0)+(M.getMinutes()<<5)+(M.getHours()<<11),R=M.getDate()+(M.getMonth()+1<<5)+(M.getFullYear()-1980<<9),r=0,g=!1;t[e++]=80,t[e++]=75,t[e++]=3,t[e++]=4,t[e++]=20,t[e++]=0,t[e++]=0,t[e++]=8;let x=e;t[e++]=t[e++]=0,t[e++]=X&255,t[e++]=X>>8,t[e++]=R&255,t[e++]=R>>8;let c=e;if(e+=8,t[e++]=i&255,t[e++]=i>>8&255,t[e++]=i>>16&255,t[e++]=i>>24,t[e++]=C&255,t[e++]=C>>8,t[e++]=t[e++]=0,t.set(h,e),e+=C,s){let f=e,v=l(S),p,y=0,T=0;e:{for(;;){let F=await v();if(F.done)throw new Error("Bad gzip data");if(p=F.value,y=T,T=y+p.length,y<=3&&T>3&&p[3-y]&30){g=!0;break e}if(T>=10){p=p.subarray(10-y);break}}for(;;){let F=e-f,L=p.length;if(F+L>=i+8){g=!0;break e}t.set(p,e),e+=L;let O=await v();if(O.done)break;p=O.value}}if(g)for(;;){let F=p.length,L=8-F,O=e;e=f;for(let A=0;A<8;A++)t[e++]=A<L?t[O-L+A]:p[F-8+A];let K=await v();if(K.done)break;p=K.value}e-=8,t[c++]=t[e++],t[c++]=t[e++],t[c++]=t[e++],t[c++]=t[e++],e-=4,g||(t[x]=8,r=e-f)}if((!s||g)&&(t.set(S,e),e+=i,r=i),!s){let f=re(S);t[c++]=f&255,t[c++]=f>>8&255,t[c++]=f>>16&255,t[c++]=f>>24}t[c++]=r&255,t[c++]=r>>8&255,t[c++]=r>>16&255,t[c++]=r>>24}let I=e;for(let m=0;m<u;m++){let h=o[m],C=E[m],S=C.length;t[e++]=80,t[e++]=75,t[e++]=1,t[e++]=2,t[e++]=20,t[e++]=0,t[e++]=20,t[e++]=0,t.set(t.subarray(h+6,h+30),e),e+=24,t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=0,t[e++]=h&255,t[e++]=h>>8&255,t[e++]=h>>16&255,t[e++]=h>>24,t.set(C,e),e+=S}return t[e++]=80,t[e++]=75,t[e++]=5,t[e++]=6,t[e++]=t[e++]=t[e++]=t[e++]=0,t[e++]=u&255,t[e++]=u>>8,t[e++]=u&255,t[e++]=u>>8,t[e++]=k&255,t[e++]=k>>8&255,t[e++]=k>>16&255,t[e++]=k>>24,t[e++]=I&255,t[e++]=I>>8&255,t[e++]=I>>16&255,t[e++]=I>>24,t[e++]=t[e++]=0,t.subarray(0,e)}var ie={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'"':"&quot;"},w=a=>a.replace(/[<>&'"]/g,n=>ie[n]),ce=a=>{let n="";for(;;){let l=a%26;if(n=String.fromCharCode(65+l)+n,a=(a-l)/26-1,a<0)return n}},N=(a,n)=>`${ce(a)}${n+1}`,pe=Date.UTC(1899,11,31)/1e3/3600/24,_=(a,n,l)=>{let o;n?(l&&a.setUTCFullYear(1899,11,31),o=a.getTime()):o=Date.UTC(l?1899:a.getFullYear(),l?11:a.getMonth(),l?31:a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds());let s=o/1e3/3600/24-pe;if(!(s<0)&&!(s<1&&!l))return s>=60&&(s+=1),s};var H=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
  <Company>${w(a)}</Company>
</Properties>`;var ee=({title:a,description:n,creator:l,creationDate:o})=>{let s=o.toISOString();return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties
  xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:dcterms="http://purl.org/dc/terms/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>${w(a)}</dc:title>
  <dc:description>${w(n)}</dc:description>
  <dc:creator>${w(l)}</dc:creator>
  <cp:lastModifiedBy>${w(l)}</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${s}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${s}</dcterms:modified>
</cp:coreProperties>`};var te=({sheetName:a})=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7" rupBuild="10211" />
  <workbookPr defaultThemeVersion="166925" />
  <sheets>
    <sheet name="${w(a)}" sheetId="1" r:id="rId1" />
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
</styleSheet>`;var ye=(d=>(d[d.Number=0]="Number",d[d.String=1]="String",d[d.LocalDate=2]="LocalDate",d[d.LocalTime=3]="LocalTime",d[d.LocalDateTime=4]="LocalDateTime",d[d.UTCDate=5]="UTCDate",d[d.UTCTime=6]="UTCTime",d[d.UTCDateTime=7]="UTCDateTime",d))(ye||{}),ge={5:12,6:10,7:20,2:12,3:10,4:20},oe=6,D=42,B=2,J=1.1,xe=Math.ceil(D/J)-B,ue=D-B,Ve=({headings:a,types:n,data:l,wrapText:o,freeze:s,autoFilter:u,creator:E,title:U,description:d,sheetName:P,company:k})=>{let b=a.length;if(b!==n.length||b!==l[0].length)throw new Error("Number of headings, types and data columns must match");let $=l.length,t=new Date,e=new Map,I=0,m=0,h=[],C=B+(u?2:0);for(let r=0;r<b;r++){let x=a[r].length*J+C;h[r]=x<oe?oe:x>D?D:x}for(let r=0;r<b;r++){if(h[r]>=D)continue;let g=n[r],x=ge[g];if(x!==void 0){h[r]<x&&(h[r]=x);continue}if(g===1){let c=0;for(let v=0;v<$;v++){let p=l[v][r];if(p==null)continue;p=String(p);let y=-1,T,F=p.length;for(;;){T=p.indexOf(`
`,y+1),T===-1&&(T=F);let L=T-y;if(L>c&&(c=L),T===F)break;y=T}if(c>=xe)break}let f=c*J+B;h[r]<f&&(h[r]=f>D?D:f)}else if(g===0){let c=0;for(let v=0;v<$;v++){let p=l[v][r];if(p==null)continue;p=String(p);let y=p.length;if(y>c&&(c=y),c>=ue)break}let f=c+B;h[r]<f&&(h[r]=f>D?D:f)}}let S=`<cols>${h.map((r,g)=>`<col min="${g+1}" max="${g+1}" width="${Math.ceil(r)}" bestFit="1" customWidth="1" />`).join("")}</cols>`,i=`<row r="1" spans="1:${b}">${a.map((r,g)=>`<c r="${N(g,0)}" t="inlineStr" s="1"><is><t>${w(r)}</t></is></c>`).join("")}</row>`,M=`${l.map((r,g)=>`<row r="${g+2}" spans="1:${b}">${r.map((x,c)=>{if(x==null)return"";let f=n[c],v=f>=2,p;if(v){let y=f===6||f===3,T=f===5||f===2,F=f>=5;p=y?4:T?3:2,x instanceof Date&&(x=_(x,F,y)??x.toISOString()),typeof x=="string"&&(f=1)}if(f===1){I++;let y=e.get(x);return y===void 0&&(y=m,e.set(x,y),m++),`<c r="${N(c,g+1)}" t="s"><v>${y}</v></c>`}return`<c r="${N(c,g+1)}"${p?` s="${p}"`:""}><v>${x}</v></c>`}).join("")}</row>`).join("")}`,X=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="${I}" uniqueCount="${m}">
${[...e].map(([r])=>`<si><t>${w(r)}</t></si>`).join("")}
</sst>`,R=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet 
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  mc:Ignorable="xr"
  xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision"
  xr:uid="{${crypto.randomUUID()}}">
  <dimension ref="A1:${N(b-1,$)}" />
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      ${s?'<pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen" />':""}
      <selection${s?' pane="bottomLeft"':""} activeCell="A2" sqref="A2" />
    </sheetView>
  </sheetViews>
  <sheetFormatPr baseColWidth="12" defaultRowHeight="16" />
${S}
  <sheetData>
${i}
${M}
  </sheetData>
  ${u?`<autoFilter ref="A1:${N(b-1,0)}" xr:uid="{3${crypto.randomUUID()}}" />`:""}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" />
</worksheet>`;return Z([{path:"[Content_Types].xml",data:H},{path:"_rels/.rels",data:j},{path:"xl/_rels/workbook.xml.rels",data:G},{path:"xl/workbook.xml",data:te({sheetName:P})},{path:"xl/styles.xml",data:ae({wrapText:o})},{path:"xl/theme/theme1.xml",data:V},{path:"xl/sharedStrings.xml",data:X},{path:"xl/worksheets/sheet1.xml",data:R},{path:"docProps/core.xml",data:ee({title:U,description:d,creator:E,creationDate:t})},{path:"docProps/app.xml",data:Q({company:k})}])};export{ye as XlsxTypes,Ve as createXlsx};
