function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
import React from 'react';
import cls from 'classnames';
import styles from './index.less';
export default function Skeleton(props) {
  var _props$count = props.count,
    count = _props$count === void 0 ? 4 : _props$count,
    _props$row = props.row,
    row = _props$row === void 0 ? 1 : _props$row,
    space = props.space,
    children = props.children,
    loading = props.loading,
    childStyle = props.childStyle,
    _props$height = props.height,
    height = _props$height === void 0 ? 100 : _props$height,
    className = props.className;
  var totalCount = count * row;
  var list = Array.from(
    {
      length: totalCount ? totalCount : 4,
    },
    function () {
      return Math.round(Math.random() * 10);
    },
  );
  if (loading) {
    var _cls;
    return /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          gap: ''.concat(space || 24, 'px'),
        },
        className: cls(
          styles.skeleton,
          className,
          ((_cls = {}),
          _defineProperty(_cls, styles.xl, count === 1),
          _defineProperty(_cls, styles.lg, count === 2),
          _defineProperty(_cls, styles.md, count === 3),
          _defineProperty(_cls, styles.sm, count === 4),
          _defineProperty(_cls, styles.xs, count === 5),
          _cls),
        ),
      },
      list.map(function (i, idx) {
        return /*#__PURE__*/ React.createElement('div', {
          key: ''.concat(i, '-').concat(idx),
          className: styles.child,
          style: _objectSpread(
            _objectSpread({}, childStyle),
            {},
            {
              height: height,
            },
          ),
        });
      }),
    );
  }
  return /*#__PURE__*/ React.createElement(React.Fragment, null, children);
}
