---
nav:
  title: 组件
  path: /components
group:
  title: 基础
---

## TooltipText 组件

Tooltip 超出指定宽度，鼠标悬浮显示弹窗

```tsx
import React from 'react';
import { TooltipText } from 'szdt-admin-components';

export default () => (
  <div style={{ width: '40px' }}>
    <TooltipText rowNumber={1} text="测试文本" />
  </div>
);
```

<API src="../../src/TooltipText/index.tsx" ></API>
