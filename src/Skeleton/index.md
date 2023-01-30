---
group:
  title: 基础
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
