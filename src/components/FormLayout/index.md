---
nav:
  title: 组件
  path: /components
group:
  order: 3
  title: 布局
---

## FormLayout 布局

```tsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import { FormLayout } from 'szdt-admin-components';
const { Item } = Form;

export default () => {
  const [form] = Form.useForm();
  return (
    <FormLayout form={form} labelCol={{ md: { span: 8 } }} extraBtn={<Button>返回</Button>}>
      <Item
        name="id"
        label="姓名"
        rules={[
          {
            required: true,
            message: '请输入姓名',
          },
        ]}
       >
        <Input placeholder="请输入姓名" />
       </Item>
       <Item
        name="name"
        label="编码"
        rules={[
          {
            required: true,
            message: '请输入编码',
          },
        ]}
       >
        <Input placeholder="请输入编码" />
       </Item>
    </FormLayout>
  )
};
```

<API src="../../components/FormLayout/index.tsx" ></API>
