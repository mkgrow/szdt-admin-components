## Card

```tsx
import React from 'react';
import { Card } from 'szdt-admin-components';

export default () => (
  <Card title="Header" activeHover footer={<div>Footer</div>}>
    Body
  </Card>
);
```

## Skeleton

```tsx
import React from 'react';
import { Skeleton } from 'szdt-admin-components';

export default () => (
  <Skeleton loading row={2} count={3} height={120}>
    content
  </Skeleton>
);
```
