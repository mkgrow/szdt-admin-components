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
declare const _default: (props: Props) => React.ReactComponentElement<any>;
export default _default;
