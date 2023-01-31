import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'szdt-admin-components',
  hash: true,
  mode: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/',
  publicPath: '/',
  dynamicImport: {},
  navs: [
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'Ant Design',
      path: 'https://4x.ant.design/components/overview-cn/',
    },
  ],
  lessLoader: {
    javascriptEnabled: true,
  },
  resolve: {
    includes: ['docs', 'src'],
  },
});
