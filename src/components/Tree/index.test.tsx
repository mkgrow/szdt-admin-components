import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Tree from './index';

describe('<Tree />', () => {
  it('render Tree with loading', () => {
    const dataSource = [
      {
        value: '一级菜单-1',
      },
      {
        value: '一级菜单-2',
        className: 'multi-second-list sub-menu',
        children: [
          {
            value: '二级菜单-1',
          },
          {
            value: '二级菜单-2',
          },
          {
            value: '二级菜单-3',
          },
          {
            value: '二级菜单-4',
            className: 'multi-third-list sub-menu',
            children: [
              {
                value: '三级菜单-1',
              },
              {
                value: '三级菜单-2',
              },
              {
                value: '三级菜单-3',
              },
              {
                value: '三级菜单-4',
              },
              {
                value: '三级菜单-5',
                className: 'multi-third-list sub-menu',
                children: [
                  {
                    value: '四级菜单-1',
                  },
                  {
                    value: '四级菜单-2',
                    children: [
                      {
                        value: '五级菜单-1',
                      },
                      {
                        value: '五级菜单-2',
                      },
                      {
                        value: '五级菜单-3',
                        children: [
                          {
                            value: '六级菜单-1',
                          },
                          {
                            value: '六级菜单-2',
                            children: [
                              {
                                value: '七级菜单-1',
                              },
                              {
                                value: '七级菜单-2',
                              },
                              {
                                value: '七级菜单-3',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    value: '四级菜单-3',
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    render(<Tree data={dataSource} />);

    expect(screen.getByRole('tree')).toBeInTheDocument();
  });
});
