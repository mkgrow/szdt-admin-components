import React from 'react';

import './index.less';

interface Props {
  /**
   * @description 是否显示
   * @default true
   * */
  show?: boolean;
  /**
   * @description 标题
   * */
  title?: string | React.ReactComponentElement<any>;
  /**
   * @description 内容
   * */
  children?: string | React.ReactComponentElement<any> | React.ReactNode;
  /**
   * @description 底部内容
   * */
  footer?: string | React.ReactComponentElement<any>;
  /**
   * @description 样式
   * */
  className?: React.CSSProperties | string;
  /**
   * @description 样式
   * */
  style?: React.CSSProperties;
  /**
   * @description 是否显示鼠标悬浮效果
   * @default false
   * */
  activeHover?: boolean;
}

export default (props: Props): React.ReactComponentElement<any> => {
  const { show = true, title, children, footer, className, activeHover = false } = props;

  return (
    <div
      data-hover={activeHover}
      className={`cus-card cus-card-bordered ${className}`}
      hidden={!show}
    >
      <div className="cus-card-title" hidden={!title}>
        {title}
      </div>
      <div className="cus-card-body" hidden={!children}>
        {children}
      </div>
      <div className="cus-card-footer" hidden={!footer}>
        {footer}
      </div>
    </div>
  );
};
