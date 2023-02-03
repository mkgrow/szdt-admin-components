import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

/**
 * 菜单图标,需要上传到https://www.iconfont.cn/
 */
const Icon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3041065_869q5mjeen4.js',
});

interface Props {
  className?: any;
  type?: any;
  style?: any;
  size?: string;
  onClick?: () => void;
}

export default function IconFont(props: Props) {
  const { type, className, style, size = 'inherit', onClick } = props;

  return (
    <Icon
      role={type}
      type={type}
      className={className}
      style={{ ...style, fontSize: size }}
      onClick={onClick}
    />
  );
}
