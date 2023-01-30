import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Skeleton from './index';

describe('<Skeleton />', () => {
  it('render Skeleton with loading', () => {
    render(
      <Skeleton loading row={2} count={3} height={120}>
        content
      </Skeleton>,
    );
    expect(screen.getAllByRole('child')).toHaveLength(6);
  });
});
