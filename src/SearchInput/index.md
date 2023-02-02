---
nav:
  title: 组件
  path: /components
group:
  title: 基础
---

## SearchInput 组件


```tsx
import React from 'react';
import { SearchInput } from 'szdt-admin-components';

export default () => (
  <SearchInput placeholder="请输入" onChange={(v: string) => console.log(v)} />
);
```

<API src="../../src/SearchInput/index.tsx" ></API>
