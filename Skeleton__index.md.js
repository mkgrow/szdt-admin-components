(self["webpackChunkszdt_admin_components"]=self["webpackChunkszdt_admin_components"]||[]).push([[654],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(72255)},48038:function(e,t,n){"use strict";n.r(t);var r=n(67294),l=n(96089),a=n(32575),o=n(66195),i=r.memo((e=>{var t=e.demos,n=t["Skeleton-demo"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"skeleton-\u7ec4\u4ef6"},r.createElement(l.AnchorLink,{to:"#skeleton-\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Skeleton \u7ec4\u4ef6"),r.createElement("p",null,"\u9aa8\u67b6\u5c4f")),r.createElement(o.default,t["Skeleton-demo"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(a.Z,{src:"../../src/Skeleton/index.tsx",identifier:"Skeleton",export:"default"}))))}));t["default"]=e=>{var t=r.useContext(l.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(i,{demos:n})}},32575:function(e,t,n){"use strict";var r=n(67294),l=n(96089),a=n(21934),o={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["Z"]=function(e){var t=e.identifier,n=e["export"],i=(0,l.useApiData)(t),c=(0,r.useContext)(l.context),u=c.locale,d=/^zh|cn$/i.test(u)?o["zh-CN"]:o["en-US"];return r.createElement(r.Fragment,null,i&&r.createElement(a.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,d.name),r.createElement("th",null,d.description),r.createElement("th",null,d.type),r.createElement("th",null,d["default"]))),r.createElement("tbody",null,i[n].map((function(e){return r.createElement("tr",{key:e.identifier},r.createElement("td",null,e.identifier),r.createElement("td",null,e.description||"--"),r.createElement("td",null,r.createElement("code",null,e.type)),r.createElement("td",null,r.createElement("code",null,e["default"]||e.required&&d.required||"--")))})))))}},21934:function(e,t,n){"use strict";var r=n(67294),l=n(97397),a=n.n(l);n(6651);function o(e,t){return s(e)||d(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(a.push(r.value),t&&a.length===t)break}catch(c){i=!0,l=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw l}}return a}}function s(e){if(Array.isArray(e))return e}var m=function(e){var t=e.children,n=(0,r.useRef)(),l=(0,r.useState)(!1),i=o(l,2),c=i[0],u=i[1],d=(0,r.useState)(!1),s=o(d,2),m=s[0],f=s[1];return(0,r.useEffect)((function(){var e=n.current,t=a()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.createElement("div",{className:"__dumi-default-table"},r.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":c||void 0,"data-right-folded":m||void 0},r.createElement("table",null,t)))};t["Z"]=m},6651:function(){}}]);