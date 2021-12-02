__webpack_base_uri__ = 'http://localhost:80';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },

  devtool: 'eval-source-map',
  devServer: {
      port: 81,
      static: path.resolve(__dirname, 'dist'),
      hot: true
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
            'style-loader',
            'css-loader',
        ]
      },
    {
      test: /\.(svg|png|jpe?g)$/,
      type: 'asset/resource',
      generator: {
        filename: 'images/[name][ext][query]'
      }
    },
    {
      test: /\.(eot|ttf|woff2?)$/,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[name][ext][query]'
      }
    },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
  ],
};