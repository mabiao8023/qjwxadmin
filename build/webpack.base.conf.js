'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const vuxLoader = require('vux-loader')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig  = {
  context: path.resolve(__dirname, '../'),
  entry: {
      // login: './src/entry/login/login.js',
      // forgetPwd: './src/entry/login/forgetPwd.js',
      goods: './src/entry/shop/goods.js',
      shopCart: './src/entry/shop/shopCart.js',
      confirmOrder: './src/entry/shop/confirmOrder.js',
      adress: './src/entry/shop/adress.js',
      addAddress: './src/entry/shop/addAddress.js',
      // me: './src/entry/me/me.js',
      // setting: './src/entry/me/setting.js',
      // modifyPwd: './src/entry/me/modifyPwd.js',
      // balance: './src/entry/me/balance.js',
      // balanceDetail: './src/entry/me/balanceDetail.js',
      // tixian: './src/entry/me/tixian.js',
      // tixiansuc: './src/entry/me/tixiansuc.js',
      // jiesuan: './src/entry/me/jiesuan.js',
      // orders: './src/entry/me/orders.js',
      // ordersDetail: './src/entry/me/orderDetail.js',
      // shouhuosuc: './src/entry/me/shouhuosuc.js',
      // youjisuc: './src/entry/me/youjisuc.js',
      // zitisuc: './src/entry/me/zitisuc.js',
      // chuangke: './src/entry/me/chuangke.js',
      // yaoqing: './src/entry/me/yaoqing.js',
      zhuceck: './src/entry/me/zhuceck.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json','.less'],
    alias: {
        '@': resolve('src'),
        'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

// if(config.build.autoPx2Rem){
//   webpackConfig.module.rules.push({
//     test: /\.(css|less|vue)$/,
//     loader: 'webpack-px-to-rem',
//     query: {
//       basePx: 75,
//       min: 1
//     }
//   })
// }

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: [
    { name : 'vux-ui'},
    {
      name: 'less-theme',
      path: 'src/assets/css/mytheme.less'
    }
    ] });
