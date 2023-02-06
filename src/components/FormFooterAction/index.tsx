import React, { useCallback } from 'react';
import { Button, Form, Space } from 'antd';

import './index.less';

const { Item } = Form;

interface Props {
  disabled?: boolean;
  onCancelText?: string;
  onOkText?: string;
  onCancel?: (v?: any) => void;
  onOk?: (v?: any) => void;
  loading?: boolean;
  extraBtn?: React.ReactNode;
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
