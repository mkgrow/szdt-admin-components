import React from 'react';
import { Form } from 'antd';
import cls from 'classnames';
import FormFooterAction from '../FormFooterAction';
import type { FormContextProps } from 'antd/es/form/context';
import type { ColProps } from 'antd/lib/grid';

import './index.less';

interface Props extends FormContextProps {
  /**
   * @description 表单内容
   * */
  children?: React.ReactNode;
  /**
   * @description 底部操作区
   * */
  footer?: React.ReactNode;
  /**
   * @description label 标签的文本换行方式
   * */
  labelCol?: ColProps;
  /**
   * @description 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
   * */
  wrapCol?: ColProps;
  /**
   * @description 内容区域样式
   * */
  contentClass?: React.CSSProperties;
  /**
   * @description 内容style
   * */
  style?: object;
  /**
   * @description 底部操作区扩展
   * */
  extraBtn?: React.ReactNode;
  /**
   * @description 其他Form参数
   * */
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
