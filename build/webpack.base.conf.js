
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const debug = require('debug')('app:config:base');

function resolve (dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = {
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath
      : (process.env.NODE_ENV === 'test' ? config.test.assetsPublicPath : config.dev.assetsPublicPath),
  },
  /*配置模块如何解析*/
  resolve: {
    /* 自动解析指定的扩展，在引入模块是不用带扩展名 */
    extensions: ['.js'],
    /* 创建 import ／ require的别名，确保模块引入变得简单  common 代表 src/common目录 */
    alias: {
      'common': resolve('src/common'),
      'server': resolve('src/server'),
      'util': resolve('src/util'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery',
          }, {
            loader: 'expose-loader',
            options: '$',
          }],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
    ],
  }
};
debug('webpack base配置创建成功');
