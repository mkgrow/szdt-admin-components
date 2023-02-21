import React from 'react';
import './index.less';
import cls from 'classnames';

interface Props {
  /**
   * @description 标题内容
   * */
  title: React.ReactNode | string;
  /**
   * @description 右侧扩展内容
   * @default null
   * */
  extra?: React.ReactNode;
  /**
   * @description 样式
   * */
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
