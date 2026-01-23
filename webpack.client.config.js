const { merge } = require('webpack-merge');
const { resolve } = require('path');
const { DefinePlugin } = require('webpack');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  target: 'web',
  entry: './frontend/entry-client.js',
  output: {
    filename: 'client_bundle.js',
    path: resolve(__dirname, 'dist/client'),
    publicPath: '/client/',
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
});
