import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'szdt-admin-components',
  mode: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: process.env.NODE_ENV === 'production' ? '/szdt-admin-components/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/szdt-admin-components/' : '/',
  dynamicImport: {},
  navs: [
    {
      title: '文档',
      path: '/docs',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'Ant Design',
      path: 'https://4x.ant.design/components/overview-cn/',
    },
  ],
});
