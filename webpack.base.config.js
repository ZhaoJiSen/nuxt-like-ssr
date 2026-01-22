import { VueLoaderPlugin } from "vue-loader/dist/index"

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          preset: ["@babel/preset-env"]
        }
      },
      {
        text: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), 
  ],
  resolve: {
    extensions: [".js", ".vue", ".json"]
  }
}
