import React from 'react';
import './index.less';
export default (function (props) {
  var _props$show = props.show,
    show = _props$show === void 0 ? true : _props$show,
    title = props.title,
    children = props.children,
    footer = props.footer,
    className = props.className,
    _props$activeHover = props.activeHover,
    activeHover = _props$activeHover === void 0 ? false : _props$activeHover;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      'data-hover': activeHover,
      className: 'cus-card cus-card-bordered '.concat(className),
      hidden: !show,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'cus-card-title',
        hidden: !title,
      },
      title,
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'cus-card-body',
        hidden: !children,
      },
      children,
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'cus-card-footer',
        hidden: !footer,
      },
      footer,
    ),
  );
});
