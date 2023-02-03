import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IconFont from './index';

describe('<IconFont />', () => {
  it('render IconFont with dumi', () => {
    render(<IconFont type="icon-search" />);
    expect(screen.getByRole('icon-search')).toBeInTheDocument();
  });
});
