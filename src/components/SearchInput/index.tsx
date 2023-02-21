import React, { useState } from 'react';
import { Input } from 'antd';
import './index.less';
import IconFont from '../IconFont';
import type { InputProps } from 'antd/es/input';

const SearchInput = ({ placeholder = '请输入关键字', onChange, ...rest }: InputProps) => {
  const [isOnBlur, setIsOnBlur] = useState<boolean>(false);

  const handleOnBlur = () => {
    setIsOnBlur(false);
  };

  const handleOnFocus = (e: any) => {
    const timer = setTimeout(() => {
      e?.target?.focus?.();
      clearTimeout(timer);
    }, 100);
    setIsOnBlur(true);
  };

  const handleOnChange = (e: any) => {
    onChange?.(e?.target?.value?.toUpperCase());
  };

  return (
    <Input
      role="input"
      placeholder={placeholder}
      className={!isOnBlur ? 'noInput' : 'input'}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      onChange={handleOnChange}
      suffix={<IconFont type="icon-search" size="20px" className={'icon'} />}
      {...rest}
    />
  );
};

export default SearchInput;
