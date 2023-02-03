import React from 'react';
import './index.less';
import cls from 'classnames';

interface Props {
  title?: React.ReactNode | string;
  extra?: React.ReactNode;
  className?: React.CSSProperties;
}
export default function Subtitle({ title, extra, className }: Props) {
  return (
    <div className={cls(className, 'title')}>
      <div>{title}</div>
      <div className="extra">{extra}</div>
    </div>
  );
}
