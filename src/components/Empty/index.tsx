import React from 'react';
import { Card, Empty as AntEmpty } from 'antd';
import cls from 'classnames';

import './index.less';

interface Props {
  /**
   * @description 空数据描述
   * */
  text?: React.ReactNode;
  /**
   * @description 样式
   * */
  className?: string;
  /**
   * @description 最外层卡片样式
   * */
  cardClassName?: string;
  /**
   * @description 空数据图片
   * */
  img?: React.ReactNode;
  /**
   * @description 是否显示
   * @default true
   * */
  show?: boolean;
  /**
   * @description 是否显示边框
   * @default true
   * */
  bordered?: boolean;
  /**
   * @description 空状态内容样式
   * */
  style?: React.CSSProperties;
}

export default function Empty(props: Props) {
  const {
    text = '暂无数据',
    className,
    cardClassName,
    img = AntEmpty.PRESENTED_IMAGE_SIMPLE,
    show = true,
    bordered = true,
    style,
  } = props;

  return show ? (
    <Card bordered={bordered} className={cls('empty-content', cardClassName)}>
      <AntEmpty image={img} description={text} className={className} style={style} />
    </Card>
  ) : null;
}
