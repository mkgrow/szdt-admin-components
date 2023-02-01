## 📦 Install

```bash
npm install szdt-admin-components
```

```bash
yarn add szdt-admin-components
```

## 🔨 Usage

```jsx
import React from 'react';
import { Card, DatePicker } from 'szdt-admin-components';

const App = () => (
  <>
    <IconFont type="icon-define" size="16px" />
    <IconText icon={TeamOutlined} text="测试" />
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
$ git clone git@github.com:ant-design/ant-design.git
$ cd ant-design
$ npm install
$ npm start
```

Open your browser and visit http://localhost:8000

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
