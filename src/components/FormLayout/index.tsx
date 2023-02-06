import React from 'react';
import { Form } from 'antd';
import cls from 'classnames';
import FormFooterAction from '../FormFooterAction';

import './index.less';

interface Props {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  labelCol?: object;
  wrapCol?: object;
  contentClass?: React.CSSProperties;
  style?: object;
  extraBtn?: React.ReactNode;
  [k: string]: any;
}
function FormLayout(props: Props) {
  const { children, footer, labelCol, wrapCol, contentClass, style, extraBtn, ...rest } =
    props || [];

  const defaultLabelCol = {
    xs: { span: 2 },
    sm: { span: 3 },
    ...labelCol,
  };

  const defaultWrapCol = {
    xs: { span: 9 },
    sm: { span: 9 },
    ...wrapCol,
  };

  return (
    <Form labelCol={defaultLabelCol} wrapperCol={defaultWrapCol} {...rest}>
      <div className={cls('form-content', contentClass)} style={style}>
        {children}
      </div>
      {footer || <FormFooterAction extraBtn={extraBtn} />}
    </Form>
  );
}

export default FormLayout;
