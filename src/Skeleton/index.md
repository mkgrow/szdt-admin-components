---
nav:
  path: /components
  order: 1
group:
  title: 基础
  path: /components
---

## Skeleton

骨架屏

```tsx
import React from 'react';
import { Skeleton } from 'szdt-admin-components';

export default () => (
  <Skeleton loading row={2} count={3} height={120}>
    content
  </Skeleton>
);
```

<API src="../../src/Skeleton/index.tsx" ></API>
