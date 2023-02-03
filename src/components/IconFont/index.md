---
nav:
  title: 组件
  path: /components
group:
  order: 1
  title: 基础
---

## IconFont 组件

[图标](https://www.iconfont.cn/)
依赖阿里矢量图库中项目miracle_icon_fount

```tsx
import React from 'react';
import { Space } from 'antd';
import { IconFont } from 'szdt-admin-components';

export default () => (
  <Space size={16} style={{ color: '#999' }}>
    <IconFont type="icon-down" size="16px" />
    <IconFont type="icon-up" size="16px" />
    <IconFont type="icon-code-box" size="16px" />
    <IconFont type="icon-question-edit" size="16px" />
    <IconFont type="icon-question" size="16px" />
    <IconFont type="icon-search" size="16px" />
    <IconFont type="icon-city" size="16px" />
    <IconFont type="icon-other" size="16px" />
    <IconFont type="icon-rule" size="16px" />
    <IconFont type="icon-indicator" size="16px" />
    <IconFont type="icon-custom" size="16px" />
    <IconFont type="icon-reduce" size="16px" />
    <IconFont type="icon-chat" size="16px" />
  </Space>
);
```

<API src="../../components/IconFont/index.tsx" ></API>
