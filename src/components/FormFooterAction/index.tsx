import React, { useCallback } from 'react';
import { Button, Form, Space } from 'antd';

import './index.less';

const { Item } = Form;

interface Props {
  /**
   * @description 确认按钮是否可点
   * @default false
   * */
  disabled?: boolean;
  /**
   * @description 取消按钮文本
   * @default 取消
   * */
  onCancelText?: string;
  /**
   * @description 确认按钮文本
   * @default 确认
   * */
  onOkText?: string;
  /**
   * @description 取消按钮点击回调
   * */
  onCancel?: (v?: any) => void;
  /**
   * @description 确认按钮点击回调
   * */
  onOk?: (v?: any) => void;
  /**
   * @description 是否加载
   * @default false
   * */
  loading?: boolean;
  /**
   * @description 扩展按钮
   * @default null
   * */
  extraBtn?: React.ReactNode;
  /**
   * @description 其他参数
   * */
  [k: string]: any;
}
function FormFooterAction({
  disabled = false,
  onCancelText = '取消',
  onOkText = '确认',
  onCancel,
  onOk,
  loading,
  extraBtn,
  ...rest
}: Props) {
  const onHandleCancel = useCallback(() => {
    if (onCancel) {
      onCancel();
      return;
    }
    window.history.back();
  }, [onCancel]);

  const onHandleOk = useCallback(
    (e) => {
      e.preventDefault();
      if (onOk) {
        onOk();
      }
    },
    [onOk],
  );

  return (
    <div {...rest} className="form-footer">
      <Space style={{ width: '100%', justifyContent: 'space-between' }}>
        <Item>{extraBtn}</Item>
        <Item>
          <Space>
            <Button onClick={onHandleCancel}>{onCancelText}</Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              onClick={onHandleOk}
              disabled={disabled}
            >
              {onOkText}
            </Button>
          </Space>
        </Item>
      </Space>
    </div>
  );
}

export default FormFooterAction;
