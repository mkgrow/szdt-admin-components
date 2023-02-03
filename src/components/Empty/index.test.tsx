import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Empty from './index';

describe('<Empty />', () => {
  it('render Empty with loading', () => {
    render(<Empty text="暂无数据" />);
    expect(screen.getByText('暂无数据')).toBeInTheDocument();
  });
});
