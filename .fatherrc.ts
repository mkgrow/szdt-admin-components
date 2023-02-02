import { defineConfig } from 'father';

export default defineConfig({
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  esm: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
});
