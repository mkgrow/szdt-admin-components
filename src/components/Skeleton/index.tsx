import React from 'react';
import cls from 'classnames';

import './index.less';

interface Props {
  /**
   * @description 一行显示的数量
   * @default 4
   * */
  count?: number;
  /**
   * @description 行数
   * @default 1
   * */
  row?: number;
  /**
   * @description 卡片高度
   * @default 100
   * */
  height?: any;
  /**
   * @description 卡片之间的间隔
   * @default 24px
   * */
  space?: number;
  /**
   * @description 控制是否显示骨架屏
   * @default false
   * */
  loading?: boolean;
  /**
   * @description 卡片样式
   * */
  childStyle?: React.CSSProperties;
  /**
   * @description 骨架屏样式
   * */
  className?: React.CSSProperties;
  /**
   * @description 加载万之后显示的内容
   * */
  children: React.ReactNode;
}

export default function Skeleton(props: Props) {
  const {
    count = 4,
    row = 1,
    space,
    children,
    loading,
    childStyle,
    height = 100,
    className,
  } = props;
  const totalCount = count * row;
  const list = Array.from({ length: totalCount ? totalCount : 4 }, () =>
    Math.round(Math.random() * 10),
  );

  if (loading) {
    return (
      <div
        style={{ gap: `${space || 24}px` }}
        className={cls('skeleton', className, {
          xl: count === 1,
          lg: count === 2,
          md: count === 3,
          sm: count === 4,
          xs: count === 5,
        })}
      >
        {list.map((i: number, idx: number) => {
          return (
            <div
              key={`${i}-${idx}`}
              role="child"
              className="child"
              style={{ ...childStyle, height }}
            />
          );
        })}
      </div>
    );
  }
  return <>{children}</>;
}
