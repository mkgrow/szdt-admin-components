import React from 'react';
import cls from 'classnames';

import './index.less';

interface Props {
  count?: number;
  row?: number;
  height?: any;
  space?: number;
  loading?: boolean;
  childStyle?: React.CSSProperties;
  className?: React.CSSProperties;
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
