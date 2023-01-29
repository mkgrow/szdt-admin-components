import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Skeleton from './index';

describe('<Skeleton />', () => {
  it('render Skeleton with dumi', () => {
    const msg = 'dumi';

    render(<Skeleton loading row={2} count={3}>content</Skeleton>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
