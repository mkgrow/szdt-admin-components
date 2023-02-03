import React from 'react';
import { Space } from 'antd';

interface Props {
  text?: string;
  icon?: any;
  onClick?: any;
  children?: React.ReactNode | any;
  [k: string]: any;
}
export default function Index(props: Props) {
  const { text, children, icon, ...rest } = props;

  return (
    <Space {...rest}>
      {React.createElement(icon)}
      {text || children}
    </Space>
  );
}
