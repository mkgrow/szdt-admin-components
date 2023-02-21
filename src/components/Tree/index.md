---
nav:
  title: 组件
  path: /components
group:
  title: 基础
---

## Tree 组件

树形组件，有子数据时并展开时现实'-'图标，收起时显示'+'图标。
可直接使用，也可以复制代码到项目中修改。

```tsx
import React from 'react';
import { Tree } from 'szdt-admin-components';

const dataSource = [
  {
    value : '一级菜单-1'
  },
  {
    value : '一级菜单-2',
    className : 'multi-second-list sub-menu',
    children : [
      {
        value : '二级菜单-1'
      },
      {
        value : '二级菜单-2'
      },
      {
        value : '二级菜单-3'
      },
      {
        value : '二级菜单-4',
        className : 'multi-third-list sub-menu',
        children : [
          {
            value : '三级菜单-1'
          },
          {
            value : '三级菜单-2',
          },
          {
            value : '三级菜单-3'
          },
          {
            value : '三级菜单-4'
          },
          {
            value : '三级菜单-5',
            className : 'multi-third-list sub-menu',
            children : [
              {
                value : '四级菜单-1'
              },
              {
                value : '四级菜单-2',
                children : [
                  {
                    value : '五级菜单-1'
                  },
                  {
                    value : '五级菜单-2',
                  },
                  {
                    value : '五级菜单-3',
                    children : [
                      {
                        value : '六级菜单-1'
                      },
                      {
                        value : '六级菜单-2',
                        children : [
                          {
                            value : '七级菜单-1'
                          },
                          {
                            value : '七级菜单-2',
                          },
                          {
                            value : '七级菜单-3'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                value : '四级菜单-3'
              }
            ]
          }
        ]
      }
    ]
  }
];
                   
export default () => (
  <Tree data={dataSource} />
);
```

<API src="../../components/Tree/index.tsx" ></API>
