import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ExportBtn from './index';

describe('<ExportBtn />', () => {
  it('render ExportBtn with loading', () => {
    render(
      <ExportBtn url="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF">
        下载
      </ExportBtn>,
    );
    expect(screen.getByRole('export')).toBeInTheDocument();
  });

  it('download image with click', () => {
    const onClick = jest.fn();
    render(
      <ExportBtn
        url="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF"
        onClick={onClick}
      >
        下载
      </ExportBtn>,
    );
    const btn = screen.getByRole('export');
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
