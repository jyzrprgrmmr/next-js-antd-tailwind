const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = require('next-compose-plugins');

const withAntdLess = require('next-plugin-antd-less')({
  //REPLACE THIS WITH YOUR DESIRED ANTD COLORS
  modifyVars: {
    '@primary-color': '#0893A6',
    '@link-color': '#1890ff',
    '@success-color': '#52c41a',
    '@warning-color': '#faad14',
    '@error-color': '#f5222d',
  },
  webpack(config) {
    return config;
  },
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},

  // ONLY for Next.js 10
  future: {
    webpack5: true,
  },
});

module.exports = withPlugins([[withBundleAnalyzer], [withAntdLess]]);
