(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"90JP":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("dEAq"),i=n("GvAC"),c=n("DSWR"),o=a.a.memo((e=>{var t=e.demos,n=t["Subtitle-demo"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"subtitle-\u7ec4\u4ef6"},a.a.createElement(l["AnchorLink"],{to:"#subtitle-\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Subtitle \u7ec4\u4ef6")),a.a.createElement(c["default"],t["Subtitle-demo"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(i["a"],{src:"../../components/Subtitle/index.tsx",identifier:"Subtitle",export:"default"}))))}));t["default"]=e=>{var t=a.a.useContext(l["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:n})}},"9kvl":function(e,t,n){"use strict";var r=n("FfOG");n.d(t,"a",(function(){return r["b"]}));n("bCY9")},GvAC:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("dEAq"),i=n("WtSh"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,n=e["export"],o=Object(l["useApiData"])(t),u=Object(r["useContext"])(l["context"]),d=u.locale,s=/^zh|cn$/i.test(d)?c["zh-CN"]:c["en-US"];return a.a.createElement(a.a.Fragment,null,o&&a.a.createElement(i["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,s.name),a.a.createElement("th",null,s.description),a.a.createElement("th",null,s.type),a.a.createElement("th",null,s["default"]))),a.a.createElement("tbody",null,o[n].map((function(e){return a.a.createElement("tr",{key:e.identifier},a.a.createElement("td",null,e.identifier),a.a.createElement("td",null,e.description||"--"),a.a.createElement("td",null,a.a.createElement("code",null,e.type)),a.a.createElement("td",null,a.a.createElement("code",null,e["default"]||e.required&&s.required||"--")))})))))}},Pg6R:function(e,t,n){},WtSh:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("hKI/"),i=n.n(l);n("Pg6R");function c(e,t){return m(e)||s(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done);i=!0)if(l.push(r.value),t&&l.length===t)break}catch(o){c=!0,a=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw a}}return l}}function m(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(r["useRef"])(),l=Object(r["useState"])(!1),o=c(l,2),u=o[0],d=o[1],s=Object(r["useState"])(!1),m=c(s,2),f=m[0],E=m[1];return Object(r["useEffect"])((function(){var e=n.current,t=i()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},a.a.createElement("table",null,t)))};t["a"]=f}}]);