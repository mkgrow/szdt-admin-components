import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

/**
 * 菜单图标,需要上传到https://www.iconfont.cn/
 */
const Icon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3041065_869q5mjeen4.js',
});

interface Props {
  /**
   * @description 图标样式
   * */
  className?: React.CSSProperties;
  /**
   * @description IconFont中上传的图标名称
   * */
  type?: string;
  /**
   * @description 图标样式
   * */
  style?: object;
  /**
   * @description 图标大小
   * */
  size?: string;
  /**
   * @description 点击回调
   * */
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
