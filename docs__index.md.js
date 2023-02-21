(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"F+kV":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),c=n("dEAq"),o=n("6T1g"),r=n("WtSh"),m=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"-online-preview"},l.a.createElement(c["AnchorLink"],{to:"#-online-preview","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u2728 Online preview"),l.a.createElement("p",null,l.a.createElement(c["Link"],{to:"https://mkgrow.github.io/szdt-admin-components/#/"},"https://mkgrow.github.io/szdt-admin-components/#/")),l.a.createElement("h2",{id:"-install"},l.a.createElement(c["AnchorLink"],{to:"#-install","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udce6 Install"),l.a.createElement(o["a"],{code:"npm install szdt-admin-components",lang:"bash"}),l.a.createElement(o["a"],{code:"yarn add szdt-admin-components",lang:"bash"}),l.a.createElement("h2",{id:"-usage"},l.a.createElement(c["AnchorLink"],{to:"#-usage","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udd28 Usage"),l.a.createElement(o["a"],{code:'import React from \'react\';\nimport { IconFont, IconText, Skeleton, TooltipText } from \'szdt-admin-components\';\n\nexport default () => (\n  <>\n    <IconFont type="icon-define" size="16px" />\n    <IconText icon={<IconFont type="icon-define" size="16px" />} text="\u6d4b\u8bd5" />\n    <Skeleton loading row={2} count={3} height={120}>\n      content\n    </Skeleton>\n    <div style={{ width: \'40px\' }}>\n      <TooltipText rowNumber={1} text="\u6d4b\u8bd5\u6587\u672c" />\n    </div>\n  </>\n);',lang:"jsx"}),l.a.createElement("h2",{id:"\ufe0f-development"},l.a.createElement(c["AnchorLink"],{to:"#\ufe0f-development","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u2328\ufe0f Development"),l.a.createElement("p",null,"clone locally:"),l.a.createElement(o["a"],{code:"$ git clone git@github.com:mkgrow/szdt-admin-components.git\n$ cd szdt-admin-components\n$ npm install\n$ npm start",lang:"bash"}),l.a.createElement("p",null,"Open your browser and visit ",l.a.createElement(c["Link"],{to:"http://localhost:8000/"},"http://localhost:8000")),l.a.createElement("h2",{id:"-catalog-introduction"},l.a.createElement(c["AnchorLink"],{to:"#-catalog-introduction","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udcd2 Catalog Introduction"),l.a.createElement(o["a"],{code:"\u251c\u2500\u2500 docs                   Component documentation\n\u2502   \u251c\u2500\u2500 index.md           Home page\n\u2502   \u2514\u2500\u2500 **.**              Site Directory Document\n\u251c\u2500\u2500 src                    Component home directory\n\u2502   \u251c\u2500\u2500 index.ts           Component registration\n\u2502   \u2514\u2500\u2500 Foo                Component development\n\u251c\u2500\u2500 .eslintrc.js           eslint config\n\u251c\u2500\u2500 .fatherrc.ts           father config\n\u251c\u2500\u2500 .umirc.ts              dumi config\n\u2514\u2500\u2500 tsconfig.json          typescript config",lang:"unknown"}),l.a.createElement("p",null,"The rest of the documents can be consulted by yourself."),l.a.createElement("h2",{id:"-command-introduction"},l.a.createElement(c["AnchorLink"],{to:"#-command-introduction","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83e\udd16 Command introduction"),l.a.createElement(r["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Remarks"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"npm install")),l.a.createElement("td",null,"Install dependencies"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"npm start")),l.a.createElement("td",null,"Project begining"),l.a.createElement("td",null,"Document usage ",l.a.createElement(c["Link"],{to:"https://github.com/umijs/dumi"},"dumi"),", component development and documentation development together")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"npm test")),l.a.createElement("td",null,"Component test"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"npm run test:coverage")),l.a.createElement("td",null,"Code coverage review"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"npm run prettier")),l.a.createElement("td",null,"Code prettier"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"npm run build")),l.a.createElement("td",null,"Component packaging"),l.a.createElement("td",null,"Use ",l.a.createElement(c["Link"],{to:"https://github.com/umijs/father"},"father"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"npm run docs:build")),l.a.createElement("td",null,"Document packaging"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"npm run docs:deploy")),l.a.createElement("td",null,"Document release"),l.a.createElement("td",null,"The default is to use GitHub Pages")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"npm run deploy")),l.a.createElement("td",null,"Document package release"),l.a.createElement("td",null,"-")))),l.a.createElement("h2",{id:"-links"},l.a.createElement(c["AnchorLink"],{to:"#-links","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udd17 Links"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c["Link"],{to:"https://ant.design/"},"Ant Design")),l.a.createElement("li",null,l.a.createElement(c["Link"],{to:"https://github.com/ant-design/ant-design-icons"},"Ant Design Icons")),l.a.createElement("li",null,l.a.createElement(c["Link"],{to:"https://www.iconfont.cn/"},"Icon Font")))))}));t["default"]=e=>{var t=l.a.useContext(c["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(m,{demos:n})}}}]);