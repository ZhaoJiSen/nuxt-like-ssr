const { resolve } = require('path');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const nodeExternals = require('webpack-node-externals');

/** @type {import('webpack').Configuration} */
module.exports = merge(baseConfig, {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'server_bundle.js',
    path: resolve(__dirname, './dist'),
  },
  externals: [nodeExternals()],
});
