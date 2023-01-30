import React from 'react';

import './index.less';

interface Props {
  show?: boolean;
  loading?: boolean;
  title?: string | React.ReactComponentElement<any>;
  children?: string | React.ReactComponentElement<any> | React.ReactNode;
  footer?: string | React.ReactComponentElement<any>;
  className?: React.CSSProperties | string;
  style?: React.CSSProperties;
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
