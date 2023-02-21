import React from 'react';
import { Space } from 'antd';

interface Props {
  /**
   * @description 文案
   * */
  text?: string;
  /**
   * @description 图标
   * */
  icon?: any;
  /**
   * @description 点击回调
   * */
  onClick?: any;
  /**
   * @description 子元素
   * @default 显示text
   * */
  children?: string | React.ReactNode;
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
