(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"9kvl":function(e,t,n){"use strict";var r=n("FfOG");n.d(t,"a",(function(){return r["b"]}));n("bCY9")},Gbc0:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("dEAq"),c=n("GvAC"),o=n("DSWR"),i=a.a.memo((e=>{var t=e.demos,n=t["ExportBtn-demo"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"exportbtn-\u7ec4\u4ef6"},a.a.createElement(l["AnchorLink"],{to:"#exportbtn-\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"ExportBtn \u7ec4\u4ef6"),a.a.createElement("p",null,"\u4e0b\u8f7d\u56fe\u7247\u3001Excel")),a.a.createElement(o["default"],t["ExportBtn-demo"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(c["a"],{src:"../../components/ExportBtn/index.tsx",identifier:"ExportBtn",export:"default"}))))}));t["default"]=e=>{var t=a.a.useContext(l["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(i,{demos:n})}},GvAC:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("dEAq"),c=n("WtSh"),o={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,n=e["export"],i=Object(l["useApiData"])(t),u=Object(r["useContext"])(l["context"]),d=u.locale,m=/^zh|cn$/i.test(d)?o["zh-CN"]:o["en-US"];return a.a.createElement(a.a.Fragment,null,i&&a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,m.name),a.a.createElement("th",null,m.description),a.a.createElement("th",null,m.type),a.a.createElement("th",null,m["default"]))),a.a.createElement("tbody",null,i[n].map((function(e){return a.a.createElement("tr",{key:e.identifier},a.a.createElement("td",null,e.identifier),a.a.createElement("td",null,e.description||"--"),a.a.createElement("td",null,a.a.createElement("code",null,e.type)),a.a.createElement("td",null,a.a.createElement("code",null,e["default"]||e.required&&m.required||"--")))})))))}},Pg6R:function(e,t,n){},WtSh:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("hKI/"),c=n.n(l);n("Pg6R");function o(e,t){return s(e)||m(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done);c=!0)if(l.push(r.value),t&&l.length===t)break}catch(i){o=!0,a=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return l}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(r["useRef"])(),l=Object(r["useState"])(!1),i=o(l,2),u=i[0],d=i[1],m=Object(r["useState"])(!1),s=o(m,2),f=s[0],E=s[1];return Object(r["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},a.a.createElement("table",null,t)))};t["a"]=f}}]);