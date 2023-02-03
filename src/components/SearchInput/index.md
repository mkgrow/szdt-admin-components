---
nav:
  title: 组件
  path: /components
group:
  order: 3
  title: 输入
---

## SearchInput 组件

带搜索图标的输入框

```tsx
import React from 'react';
import { SearchInput } from 'szdt-admin-components';

export default () => (
  <SearchInput placeholder="请输入" onChange={(v: string) => console.log(v)} />
);
```

<API src="../../components/SearchInput/index.tsx" ></API>
