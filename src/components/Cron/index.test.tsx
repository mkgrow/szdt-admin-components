import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Cron from './index';

describe('<Cron />', () => {
  it('render Cron with loading', () => {
    const onChange = jest.fn();
    render(<Cron value='0 0 0 * * ?' onChange={onChange} />);
    expect(screen.getByPlaceholderText('请选择时间')).toBeInTheDocument();
  });
});
