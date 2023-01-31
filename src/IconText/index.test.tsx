import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IconText from './index';
import { TeamOutlined } from '@ant-design/icons';

describe('<IconFont />', () => {
  it('render IconFont with dumi', () => {
    render(<IconText icon={TeamOutlined} text="测试" />);
    expect(screen.getByText('测试')).toBeInTheDocument();
  });
});
