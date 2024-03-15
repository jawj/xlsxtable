var W,se=()=>{let a=Int32Array,s=new a(256),f=new a(4096),o,n,i;for(n=0;n<256;n++)o=n,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,f[n]=s[n]=o&1?-306674912^o>>>1:o>>>1;for(n=0;n<256;n++)for(i=s[n],o=256+n;o<4096;o+=256)i=f[o]=i>>>8^s[i&255];for(W=[s],n=1;n<16;n++)W[n]=f.subarray(n*256,(n+1)*256)},re=(a,s=0)=>{W||se();let[f,o,n,i,M,$,P,E,x,L,A,t,e,F,r,b]=W,y=s^-1,T=a.length-15,l=0;for(;l<T;)y=b[a[l++]^y&255]^r[a[l++]^y>>8&255]^F[a[l++]^y>>16&255]^e[a[l++]^y>>>24]^t[a[l++]]^A[a[l++]]^L[a[l++]]^x[a[l++]]^E[a[l++]]^P[a[l++]]^$[a[l++]]^M[a[l++]]^i[a[l++]]^n[a[l++]]^o[a[l++]]^f[a[l++]];for(T+=15;l<T;)y=y>>>8^f[(y^a[l++])&255];return~y},le=typeof CompressionStream<"u",Y=new TextEncoder,q=a=>a.reduce((s,f)=>s+f.length,0),Z=Uint8Array;function ne(a){let s=new CompressionStream("gzip"),f=s.writable.getWriter(),o=s.readable.getReader();return f.write(a),f.close(),()=>o.read()}async function _(a,s=!0,f=ne){let o=[],n=le&&s,i=a.length,M=a.map(r=>Y.encode(r.path)),$=a.map(({data:r})=>typeof r=="string"?Y.encode(r):r instanceof ArrayBuffer?new Z(r):r),P=q($),E=q(M),x=i*46+E,L=P+i*30+E+x+22,A=new Date,t=new Z(L),e=0;for(let r=0;r<i;r++){o[r]=e;let b=M[r],y=b.length,T=$[r],l=T.length,k=a[r].lastModified??A,U=(k.getSeconds()/2|0)+(k.getMinutes()<<5)+(k.getHours()<<11),c=k.getDate()+(k.getMonth()+1<<5)+(k.getFullYear()-1980<<9),h=0,p=!1;t[e++]=80,t[e++]=75,t[e++]=3,t[e++]=4,t[e++]=20,t[e++]=0,t[e++]=0,t[e++]=8;let C=e;t[e++]=t[e++]=0,t[e++]=U&255,t[e++]=U>>8,t[e++]=c&255,t[e++]=c>>8;let m=e;if(e+=8,t[e++]=l&255,t[e++]=l>>8&255,t[e++]=l>>16&255,t[e++]=l>>24,t[e++]=y&255,t[e++]=y>>8,t[e++]=t[e++]=0,t.set(b,e),e+=y,n){let d=e,u=f(T),g,v=0,I=0;e:{for(;;){let w=await u();if(w.done)throw new Error("Bad gzip data");if(g=w.value,v=I,I=v+g.length,v<=3&&I>3&&g[3-v]&30){p=!0;break e}if(I>=10){g=g.subarray(10-v);break}}for(;;){let w=e-d,B=g.length;if(w+B>=l+8){p=!0;break e}t.set(g,e),e+=B;let O=await u();if(O.done)break;g=O.value}}if(p)for(;;){let w=g.length,B=8-w,O=e;e=d;for(let X=0;X<8;X++)t[e++]=X<B?t[O-B+X]:g[w-8+X];let z=await u();if(z.done)break;g=z.value}e-=8,t[m++]=t[e++],t[m++]=t[e++],t[m++]=t[e++],t[m++]=t[e++],e-=4,p||(t[C]=8,h=e-d)}if((!n||p)&&(t.set(T,e),e+=l,h=l),!n){let d=re(T);t[m++]=d&255,t[m++]=d>>8&255,t[m++]=d>>16&255,t[m++]=d>>24}t[m++]=h&255,t[m++]=h>>8&255,t[m++]=h>>16&255,t[m++]=h>>24}let F=e;for(let r=0;r<i;r++){let b=o[r],y=M[r],T=y.length;t[e++]=80,t[e++]=75,t[e++]=1,t[e++]=2,t[e++]=20,t[e++]=0,t[e++]=20,t[e++]=0,t.set(t.subarray(b+6,b+30),e),e+=24,t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=t[e++]=0,t[e++]=b&255,t[e++]=b>>8&255,t[e++]=b>>16&255,t[e++]=b>>24,t.set(y,e),e+=T}return t[e++]=80,t[e++]=75,t[e++]=5,t[e++]=6,t[e++]=t[e++]=t[e++]=t[e++]=0,t[e++]=i&255,t[e++]=i>>8,t[e++]=i&255,t[e++]=i>>8,t[e++]=x&255,t[e++]=x>>8&255,t[e++]=x>>16&255,t[e++]=x>>24,t[e++]=F&255,t[e++]=F>>8&255,t[e++]=F>>16&255,t[e++]=F>>24,t[e++]=t[e++]=0,t.subarray(0,e)}var ie={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'"':"&quot;"},S=a=>a.replace(/[<>&'"]/g,s=>ie[s]),ce=a=>{let s="";for(;;){let f=a%26;if(s=String.fromCharCode(65+f)+s,a=(a-f)/26-1,a<0)return s}},N=(a,s)=>`${ce(a)}${s+1}`,pe=Date.UTC(1899,11,31)/1e3/3600/24,Q=a=>{let s=a.getTime()/1e3/3600/24-pe;if(!(s<1))return s>=60&&(s+=1),s};var H=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  mc:Ignorable="x14ac x16r2 xr"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"
  xmlns:x16r2="http://schemas.microsoft.com/office/spreadsheetml/2015/02/main"
  xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision">
  <numFmts count="3">
    <numFmt numFmtId="164" formatCode="yyyy\\-mm\\-dd\\ hh:mm:ss" />
    <numFmt numFmtId="165" formatCode="yyyy\\-mm\\-dd" />
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
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"><alignment wrapText="true" /></xf>
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
</styleSheet>`;var J=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Relationships>`;var ee=({company:a})=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
  <Company>${S(a)}</Company>
</Properties>`;var te=({title:a,description:s,creator:f,creationDate:o})=>{let n=o.toISOString();return`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties
  xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:dcterms="http://purl.org/dc/terms/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>${S(a)}</dc:title>
  <dc:description>${S(s)}</dc:description>
  <dc:creator>${S(f)}</dc:creator>
  <cp:lastModifiedBy>${S(f)}</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${n}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${n}</dcterms:modified>
</cp:coreProperties>`};var ae=({sheetName:a})=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7" rupBuild="10211" />
  <workbookPr defaultThemeVersion="166925" />
  <sheets>
    <sheet name="${S(a)}" sheetId="1" r:id="rId1" />
  </sheets>
  <calcPr calcId="181029" />
</workbook>`;var ge=(i=>(i[i.Number=0]="Number",i[i.String=1]="String",i[i.DateTime=2]="DateTime",i[i.Date=3]="Date",i[i.Time=4]="Time",i))(ge||{}),xe={4:!0,3:!0,2:!0},ue={4:10,3:12,2:20},oe=6,D=42,R=2,K=1.6,Ce=Math.ceil(D/K)-R,ve=D-R,Je=({headings:a,types:s,data:f,creator:o,title:n,description:i,sheetName:M,company:$,freeze:P,autoFilter:E})=>{let x=a.length;if(x!==s.length||x!==f[0].length)throw new Error("Number of headings, types and data columns must match");let L=f.length,A=new Date,t=new Map,e=0,F=0,r=[],b=R+(E?3:0);for(let c=0;c<x;c++){let p=a[c].length*K+b;r[c]=p<oe?oe:p>D?D:p}for(let c=0;c<x;c++){if(r[c]>=D)continue;let h=s[c],p=ue[h];if(p!==void 0){r[c]<p&&(r[c]=p);continue}if(h===1){let C=0;for(let d=0;d<L;d++){let u=f[d][c],g=-1,v,I=u.length;for(;;){v=u.indexOf(`
`,g+1),v===-1&&(v=I);let w=v-g;if(w>C&&(C=w),v===I)break;g=v}if(C>=Ce)break}let m=C*K+R;r[c]<m&&(r[c]=m>D?D:m)}else if(h===0){let C=0;for(let d=0;d<L;d++){let u=f[d][c].length;if(u>C&&(C=u),C>=ve)break}let m=C+R;r[c]<m&&(r[c]=m>D?D:m)}}let y=`<cols>${r.map((c,h)=>`<col min="${h+1}" max="${h+1}" width="${c}" bestFit="1" customWidth="1" />`).join("")}</cols>`,T=`<row r="1" spans="1:${x}">${a.map((c,h)=>`<c r="${N(h,0)}" t="inlineStr" s="1"><is><t>${S(c)}</t></is></c>`).join("")}</row>`,l=`${f.map((c,h)=>`<row r="${h+2}" spans="1:${x}">${c.map((p,C)=>{let m=s[C],d;if(m in xe){if(m===4){d=4;let[u,g,v]=p.split(":").map(I=>+I);p=new Date(Date.UTC(1900,0,1,u,g,v))}else m===3?(d=3,p=new Date(Date.parse(p))):(d=2,p=new Date(Date.parse(p)));p=Q(p)??p}if(m===1){e++;let u=t.get(p);return u===void 0&&(u=F,t.set(p,u),F++),`<c r="${N(C,h+1)}" t="s"><v>${u}</v></c>`}return`<c r="${N(C,h+1)}"${d?` s="${d}"`:""}><v>${p}</v></c>`}).join("")}</row>`).join("")}`,k=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="${e}" uniqueCount="${F}">
${[...t].map(([c])=>`<si><t>${S(c)}</t></si>`).join("")}
</sst>`,U=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet 
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  mc:Ignorable="xr"
  xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision"
  xr:uid="{${crypto.randomUUID()}}">
  <dimension ref="A1:${N(x-1,L)}" />
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      ${P?'<pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen" />':""}
      <selection${P?' pane="bottomLeft"':""} activeCell="A2" sqref="A2" />
    </sheetView>
  </sheetViews>
  <sheetFormatPr baseColWidth="12" defaultRowHeight="16" />
${y}
  <sheetData>
${T}
${l}
  </sheetData>
  ${E?`<autoFilter ref="A1:${N(x-1,0)}" xr:uid="{3${crypto.randomUUID()}}" />`:""}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" />
</worksheet>`;return console.log(k,U),_([{path:"[Content_Types].xml",data:H},{path:"_rels/.rels",data:j},{path:"xl/_rels/workbook.xml.rels",data:J},{path:"xl/workbook.xml",data:ae({sheetName:M})},{path:"xl/styles.xml",data:G},{path:"xl/theme/theme1.xml",data:V},{path:"xl/sharedStrings.xml",data:k},{path:"xl/worksheets/sheet1.xml",data:U},{path:"docProps/core.xml",data:te({title:n,description:i,creator:o,creationDate:A})},{path:"docProps/app.xml",data:ee({company:$})}])};export{ge as XlsxDataTypes,Je as createXlsx};
