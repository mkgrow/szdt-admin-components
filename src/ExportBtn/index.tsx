import React, { useCallback } from 'react';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import useDownload from './useDownload';
import { BaseButtonProps } from 'antd/lib/button/button';

const ExportBtn: React.FC<
  {
    url?: string;
  } & BaseButtonProps
> = (props) => {
  const {
    children,
    url = '/download',
    type,
    icon = <UploadOutlined />,
    disabled,
    onClick,
    style,
    className,
    size,
    ...options
  } = props;
  const { loading, download } = useDownload(url, options);

  const handleOnClick = useCallback(
    (e: any) => {
      download();
      onClick?.(e);
    },
    [download, onClick],
  );

  return (
    <Button
      role="export"
      size={size}
      type={type}
      loading={loading}
      onClick={handleOnClick}
      icon={icon}
      disabled={disabled}
      style={style}
      className={className}
    >
      {children}
    </Button>
  );
};

export default ExportBtn;
