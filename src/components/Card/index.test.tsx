import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from './index';

describe('<Card />', () => {
  it('render Card with dumi', () => {
    const msg = 'dumi';

    render(<Card title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
