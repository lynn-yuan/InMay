const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ // 可以自动生成带有js的html，该js为defer属性
      template: 'public/index.html',
      inject: 'body',
      hash: false,
    }),
  ],
});