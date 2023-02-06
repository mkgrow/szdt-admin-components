import React from 'react';
import { Form, Input } from 'antd';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormLayout from './index';

describe('<FormLayout />', () => {
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

  it('render FormLayout with dumi', () => {
    render(
      <FormLayout role="form-layout">
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: '请输入姓名',
            },
          ]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
      </FormLayout>,
    );
    expect(screen.getByRole('form-layout')).toBeInTheDocument();
  });
});
