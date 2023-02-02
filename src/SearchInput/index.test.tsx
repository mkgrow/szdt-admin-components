import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './index';

describe('<SearchInput />', () => {
  it('render SearchInput with loading', () => {
    const onChange = jest.fn();
    render(<SearchInput placeholder="请输入" onChange={onChange} />);
    expect(screen.getByRole('input')).toBeInTheDocument();
  });

  it('render and update SearchInput value', () => {
    const onChange = jest.fn();
    render(<SearchInput placeholder="请输入" onChange={onChange} />);
    const input = screen.getByRole('input');
    fireEvent.change(input, { target: { value: '测试' } });
    expect(input.value).toEqual('测试');
  });
});
