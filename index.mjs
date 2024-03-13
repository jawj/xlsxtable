var B,q=()=>{let s=Int32Array,l=new s(256),i=new s(4096),t,r,c;for(r=0;r<256;r++)t=r,t=t&1?-306674912^t>>>1:t>>>1,t=t&1?-306674912^t>>>1:t>>>1,t=t&1?-306674912^t>>>1:t>>>1,t=t&1?-306674912^t>>>1:t>>>1,t=t&1?-306674912^t>>>1:t>>>1,t=t&1?-306674912^t>>>1:t>>>1,t=t&1?-306674912^t>>>1:t>>>1,i[r]=l[r]=t&1?-306674912^t>>>1:t>>>1;for(r=0;r<256;r++)for(c=l[r],t=256+r;t<4096;t+=256)c=i[t]=c>>>8^l[c&255];for(B=[l],r=1;r<16;r++)B[r]=i.subarray(r*256,(r+1)*256)},Z=(s,l=0)=>{B||q();let[i,t,r,c,x,b,F,T,y,k,M,a,e,h,n,m]=B,p=l^-1,g=s.length-15,o=0;for(;o<g;)p=m[s[o++]^p&255]^n[s[o++]^p>>8&255]^h[s[o++]^p>>16&255]^e[s[o++]^p>>>24]^a[s[o++]]^M[s[o++]]^k[s[o++]]^y[s[o++]]^T[s[o++]]^F[s[o++]]^b[s[o++]]^x[s[o++]]^c[s[o++]]^r[s[o++]]^t[s[o++]]^i[s[o++]];for(g+=15;o<g;)p=p>>>8^i[(p^s[o++])&255];return~p},_=typeof CompressionStream<"u",O=new TextEncoder,H=s=>s.reduce((l,i)=>l+i.length,0),V=Uint8Array;function Q(s){let l=new CompressionStream("gzip"),i=l.writable.getWriter(),t=l.readable.getReader();return i.write(s),i.close(),()=>t.read()}async function j(s,l=!0,i=Q){let t=[],r=_&&l,c=s.length,x=s.map(n=>O.encode(n.path)),b=s.map(({data:n})=>typeof n=="string"?O.encode(n):n instanceof ArrayBuffer?new V(n):n),F=H(b),T=H(x),y=c*46+T,k=F+c*30+T+y+22,M=new Date,a=new V(k),e=0;for(let n=0;n<c;n++){t[n]=e;let m=x[n],p=m.length,g=b[n],o=g.length,S=s[n].lastModified??M,N=(S.getSeconds()/2|0)+(S.getMinutes()<<5)+(S.getHours()<<11),$=S.getDate()+(S.getMonth()+1<<5)+(S.getFullYear()-1980<<9),w=0,E=!1;a[e++]=80,a[e++]=75,a[e++]=3,a[e++]=4,a[e++]=20,a[e++]=0,a[e++]=0,a[e++]=8;let z=e;a[e++]=a[e++]=0,a[e++]=N&255,a[e++]=N>>8,a[e++]=$&255,a[e++]=$>>8;let f=e;if(e+=8,a[e++]=o&255,a[e++]=o>>8&255,a[e++]=o>>16&255,a[e++]=o>>24,a[e++]=p&255,a[e++]=p>>8,a[e++]=a[e++]=0,a.set(m,e),e+=p,r){let u=e,U=i(g),d,I=0,A=0;e:{for(;;){let v=await U();if(v.done)throw new Error("Bad gzip data");if(d=v.value,I=A,A=I+d.length,I<=3&&A>3&&d[3-I]&30){E=!0;break e}if(A>=10){d=d.subarray(10-I);break}}for(;;){let v=e-u,L=d.length;if(v+L>=o+8){E=!0;break e}a.set(d,e),e+=L;let P=await U();if(P.done)break;d=P.value}}if(E)for(;;){let v=d.length,L=8-v,P=e;e=u;for(let D=0;D<8;D++)a[e++]=D<L?a[P-L+D]:d[v-8+D];let R=await U();if(R.done)break;d=R.value}e-=8,a[f++]=a[e++],a[f++]=a[e++],a[f++]=a[e++],a[f++]=a[e++],e-=4,E||(a[z]=8,w=e-u)}if((!r||E)&&(a.set(g,e),e+=o,w=o),!r){let u=Z(g);a[f++]=u&255,a[f++]=u>>8&255,a[f++]=u>>16&255,a[f++]=u>>24}a[f++]=w&255,a[f++]=w>>8&255,a[f++]=w>>16&255,a[f++]=w>>24}let h=e;for(let n=0;n<c;n++){let m=t[n],p=x[n],g=p.length;a[e++]=80,a[e++]=75,a[e++]=1,a[e++]=2,a[e++]=20,a[e++]=0,a[e++]=20,a[e++]=0,a.set(a.subarray(m+6,m+30),e),e+=24,a[e++]=a[e++]=a[e++]=a[e++]=a[e++]=a[e++]=a[e++]=a[e++]=a[e++]=a[e++]=0,a[e++]=m&255,a[e++]=m>>8&255,a[e++]=m>>16&255,a[e++]=m>>24,a.set(p,e),e+=g}return a[e++]=80,a[e++]=75,a[e++]=5,a[e++]=6,a[e++]=a[e++]=a[e++]=a[e++]=0,a[e++]=c&255,a[e++]=c>>8,a[e++]=c&255,a[e++]=c>>8,a[e++]=y&255,a[e++]=y>>8&255,a[e++]=y>>16&255,a[e++]=y>>24,a[e++]=h&255,a[e++]=h>>8&255,a[e++]=h>>16&255,a[e++]=h>>24,a[e++]=a[e++]=0,a.subarray(0,e)}var G=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
  <Override PartName="/docProps/core.xml"
    ContentType="application/vnd.openxmlformats-package.core-properties+xml" />
  <Override PartName="/docProps/app.xml"
    ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" />
</Types>
`;var W=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Relationships>
`;var J=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</a:theme>`;var K=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  mc:Ignorable="x14ac x16r2 xr"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"
  xmlns:x16r2="http://schemas.microsoft.com/office/spreadsheetml/2015/02/main"
  xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision">
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
  <fills count="2">
    <fill>
      <patternFill patternType="none" />
    </fill>
    <fill>
      <patternFill patternType="gray125" />
    </fill>
  </fills>
  <borders count="1">
    <border>
      <left />
      <right />
      <top />
      <bottom />
      <diagonal />
    </border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" />
  </cellStyleXfs>
  <cellXfs count="2">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" />
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" />
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
</styleSheet>
`;var X=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId3"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
    Target="styles.xml" />
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"
    Target="theme/theme1.xml" />
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet1.xml" />
</Relationships>
`;function re(s){let l="";for(;s!==-1;){let i=s%26;l=String.fromCharCode(65+i)+l,s=(s-i)/26-1}return l}function Y(s,l){return`${re(s)}${l+1}`}function C(s){return s.replace(/[<>&'"]/g,l=>({"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'"':"&quot;"})[l])}function ue({creator:s,title:l,description:i,sheetName:t,company:r,data:c}){let x=new Date().toISOString(),b=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
  <Company>${C(r)}</Company>
</Properties>`,F=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties
  xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:dcterms="http://purl.org/dc/terms/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>${C(l)}</dc:title>
  <dc:description>${C(i)}</dc:description>
  <dc:creator>${C(s)}</dc:creator>
  <cp:lastModifiedBy>${C(s)}</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${x}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${x}</dcterms:modified>
</cp:coreProperties>`,T=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7" rupBuild="10211" />
  <workbookPr defaultThemeVersion="166925" />
  <sheets>
    <sheet name="${C(t)}" sheetId="1" r:id="rId1" />
  </sheets>
  <calcPr calcId="181029" />
</workbook>`,y=c[0],k=c.slice(1),M=`
    <row r="1" spans="1:${y.length}" s="1" customFormat="1">
      ${y.map((e,h)=>`
      <c r="${Y(h,0)}" s="1" t="inlineStr"><is><t>${C(e)}</t></is></c>`).join("")}
    </row>
    ${k.map((e,h)=>`
    <row r="${h+2}" spans="1:${e.length}">
      ${e.map((n,m)=>`
      <c r="${Y(m,h+1)}"><v>${n}</v></c>`).join("")}
    </row>`).join("")}`,a=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet 
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  mc:Ignorable="xr"
  xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision"
  xr:uid="{${crypto.randomUUID()}}">
  <dimension ref="A1:C2" />
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <selection sqref="A1:A1" />
    </sheetView>
  </sheetViews>
  <sheetFormatPr baseColWidth="12" defaultRowHeight="16" />
  <sheetData>${M}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" />
</worksheet>`;return j([{path:"[Content_Types].xml",data:G},{path:"_rels/.rels",data:W},{path:"xl/_rels/workbook.xml.rels",data:X},{path:"xl/workbook.xml",data:T},{path:"xl/styles.xml",data:K},{path:"xl/theme/theme1.xml",data:J},{path:"xl/worksheets/sheet1.xml",data:a},{path:"docProps/core.xml",data:F},{path:"docProps/app.xml",data:b}])}export{ue as createXlsx};
