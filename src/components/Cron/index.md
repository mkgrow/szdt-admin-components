---
nav:
  title: 组件
  path: /components
group:
  title: 其他
---

## Cron 组件

根据选择的类型和时间生成cron表达式

```tsx
import React, { useState } from 'react';
import { Space } from 'antd';
import { Cron } from 'szdt-admin-components';

export default () => {
  const [value, setValue] = useState(null);
  
  return (
    <Space direction='vertical'>
      <Cron value={value} onChange={setValue} />
      <div>{value}</div>
    </Space>
  )
};
```

<API src="../../components/Cron/index.tsx" ></API>
