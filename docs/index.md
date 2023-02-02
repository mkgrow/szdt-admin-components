---
title: szdt-admin-components
order: 1
hero:
  title: '思辙数据'
  desc: '管理系统组件库'
  actions:
    - text: 开始使用
      link: /components
footer: Copyright szdt © 2023
---

## ✨ Online preview

https://mkgrow.github.io/szdt-admin-components/#/components

## 📦 Install

```bash
npm install szdt-admin-components
```

```bash
yarn add szdt-admin-components
```

## 🔨 Usage

```jsx | pure
import React from 'react';
import { IconFont, IconText, Skeleton, TooltipText } from 'szdt-admin-components';

export default () => (
  <>
    <IconFont type="icon-define" size="16px" />
    <IconText icon={<IconFont type="icon-define" size="16px" />} text="测试" />
    <Skeleton loading row={2} count={3} height={120}>
      content
    </Skeleton>
    <div style={{ width: '40px' }}>
      <TooltipText rowNumber={1} text="测试文本" />
    </div>
  </>
);
```

## ⌨️ Development

clone locally:

```bash
$ git clone git@github.com:mkgrow/szdt-admin-components.git
$ cd szdt-admin-components
$ npm install
$ npm start
```

Open your browser and visit http://localhost:8000

## 📒 Catalog Introduction

```
├── docs                   Component documentation
│   ├── index.md           Home page
│   └── **.**              Site Directory Document
├── src                    Component home directory
│   ├── index.ts           Component registration
│   └── Foo                Component development
├── .eslintrc.js           eslint config
├── .fatherrc.ts           father config
├── .umirc.ts              dumi config
└── tsconfig.json          typescript config
```

The rest of the documents can be consulted by yourself.

## 🤖 Command introduction

| Name                    | Description               | Remarks                                                                                                            |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `npm install`           | Install dependencies      | -                                                                                                                  |
| `npm start`             | Project begining          | Document usage [dumi](https://github.com/umijs/dumi), component development and documentation development together |
| `npm test`              | Component test            | -                                                                                                                  |
| `npm run test:coverage` | Code coverage review      | -                                                                                                                  |
| `npm run prettier`      | Code prettier             | -                                                                                                                  |
| `npm run build`         | Component packaging       | Use [father](https://github.com/umijs/father)                                                                      |                                                                                                      |
| `npm run docs:build`    | Document packaging        | -                                                                                                                  |
| `npm run docs:deploy`   | Document release          | The default is to use GitHub Pages                                                                                 |
| `npm run deploy`        | Document package release  | -                                                                                                                  |

## 🔗 Links

- [Ant Design](https://ant.design/)
- [Ant Design Icons](https://github.com/ant-design/ant-design-icons)
- [Icon Font](https://www.iconfont.cn/)
