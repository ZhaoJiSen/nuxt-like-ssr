const { resolve } = require('path');

const vueLoader = require('vue-loader');
const babelLoader = require('babel-loader');
const nodeExternals = require('webpack-node-externals');

/** @type {import('webpack').Configuration} */
module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'server_bundle.js',
    path: resolve(__dirname, './dist'),
  },
  externals: [nodeExternals()],
  plugins: [],
  loader: [babelLoader({}), vueLoader()],
};
 