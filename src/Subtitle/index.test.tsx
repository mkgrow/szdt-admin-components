import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Subtitle from './index';

describe('<Subtitle />', () => {
  it('render Subtitle with loading', () => {
    render(<Subtitle title="副标题" extra={<div>更多</div>} />);
    expect(screen.getByText('副标题')).toBeInTheDocument();
  });
});
