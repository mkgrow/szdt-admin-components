import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TooltipText from './index';

describe('<TooltipText />', () => {
  it('render Skeleton with loading', () => {
    render(
      <div style={{ width: '40px' }}>
        <TooltipText rowNumber={1} text="测试文本" />
      </div>,
    );
    expect(screen.getAllByText('测试文本')).toHaveLength(2);
  });
});
