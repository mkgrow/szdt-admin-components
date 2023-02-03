import React from 'react';
import { Card, Empty as AntEmpty } from 'antd';
import cls from 'classnames';

import './index.less';

interface Props {
  text?: React.ReactNode;
  className?: string;
  cardClassName?: string;
  img?: React.ReactNode;
  show?: boolean;
  bordered?: boolean;
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
