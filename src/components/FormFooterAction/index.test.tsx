import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormFooterAction from './index';

describe('<FormFooterAction />', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('render FormFooterAction with dumi', () => {
    render(<FormFooterAction role="form-footer" />);
    expect(screen.getByRole('form-footer')).toBeInTheDocument();
  });
});
