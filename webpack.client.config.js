const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './frontend/entry-client.js',
  output: {
    filename: 'client_bundle.js',
    path: resolve(__dirname, 'dist/client'),
    publicPath: '/client/',
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
  resolve: { extensions: ['.js', '.vue'] },
  plugins: [new VueLoaderPlugin()],
};
