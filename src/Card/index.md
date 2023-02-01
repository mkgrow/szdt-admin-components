---
nav:
  title: 组件
  path: /components
group:
  title: 基础
---

## Card 组件

卡片

```tsx
import React from 'react';
import { Card } from 'szdt-admin-components';

export default () => (
  <Card title="Header" activeHover footer={<div>Footer</div>}>
    Body
  </Card>
);
```

<API src="../../src/Card/index.tsx" ></API>
