import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'szdt-admin-components',
  mode: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/szdt-admin-components/',
  publicPath: './',
  navs: [
    null,
    {
      title: 'AntDesign',
      path: 'https://4x.ant.design/components/overview-cn/',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/mkgrow/szdt-admin-components',
    },
  ],
  lessLoader: {
    javascriptEnabled: true,
  },
  resolve: {
    includes: ['docs', 'src'],
  },
  mfsu: {},
  dynamicImport: {},
  exportStatic: {},
  history: {
    type: 'hash',
  },
});
