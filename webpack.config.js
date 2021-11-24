const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/img", to: "img" },
      ],
    }),
  ],

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
      port: 81,
      static: path.resolve(__dirname, 'dist'),
      // hot: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  }
};