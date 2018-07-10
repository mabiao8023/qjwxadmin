'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: './login.html',
    //   template: './src/views/login/login.html',
    //   inject: true,
    //   chunks:['login']
    // }),
    //   new HtmlWebpackPlugin({
    //       filename: './forgetPwd.html',
    //       template: './src/views/login/forgetPwd.html',
    //       inject: true,
    //       chunks:['forgetPwd']
    //   }),
      new HtmlWebpackPlugin({
          filename: './goods.html',
          template: './src/views/shop/goods.html',
          inject: true,
          chunks:['goods']
      }),
      new HtmlWebpackPlugin({
        filename: './shopCart.html',
        template: './src/views/shop/shopCart.html',
        inject: true,
        chunks:['shopCart']
      }),
      new HtmlWebpackPlugin({
        filename: './confirmOrder.html',
        template: './src/views/shop/confirmOrder.html',
        inject: true,
        chunks:['confirmOrder']
      }),
      new HtmlWebpackPlugin({
        filename: './adress.html',
        template: './src/views/shop/adress.html',
        inject: true,
        chunks:['adress']
      }),
    new HtmlWebpackPlugin({
      filename: './addAddress.html',
      template: './src/views/shop/addAddress.html',
      inject: true,
      chunks:['addAddress']
    }),
    new HtmlWebpackPlugin({
      filename: './ziti.html',
      template: './src/views/shop/ziti.html',
      inject: true,
      chunks:['ziti']
    }),
    //   new HtmlWebpackPlugin({
    //     filename: './me.html',
    //     template: './src/views/me/me.html',
    //     inject: true,
    //     chunks:['me']
    //   }),
    //   new HtmlWebpackPlugin({
    //     filename: './setting.html',
    //     template: './src/views/me/setting.html',
    //     inject: true,
    //     chunks:['setting']
    //   }),
    //   new HtmlWebpackPlugin({
    //     filename: './modifyPwd.html',
    //     template: './src/views/me/modifyPwd.html',
    //     inject: true,
    //     chunks:['modifyPwd']
    //   }),
    // new HtmlWebpackPlugin({
    //   filename: './balance.html',
    //   template: './src/views/me/balance.html',
    //   inject: true,
    //   chunks:['balance']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './balanceDetail.html',
    //   template: './src/views/me/balanceDetail.html',
    //   inject: true,
    //   chunks:['balanceDetail']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './tixian.html',
    //   template: './src/views/me/tixian.html',
    //   inject: true,
    //   chunks:['tixian']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './tixiansuc.html',
    //   template: './src/views/me/tixiansuc.html',
    //   inject: true,
    //   chunks:['tixiansuc']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './jiesuan.html',
    //   template: './src/views/me/jiesuan.html',
    //   inject: true,
    //   chunks:['jiesuan']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './orders.html',
    //   template: './src/views/me/orders.html',
    //   inject: true,
    //   chunks:['orders']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './orderDetail.html',
    //   template: './src/views/me/orderDetail.html',
    //   inject: true,
    //   chunks:['ordersDetail']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './shouhuosuc.html',
    //   template: './src/views/me/shouhuosuc.html',
    //   inject: true,
    //   chunks:['shouhuosuc']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './youjisuc.html',
    //   template: './src/views/me/youjisuc.html',
    //   inject: true,
    //   chunks:['youjisuc']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './zitisuc.html',
    //   template: './src/views/me/zitisuc.html',
    //   inject: true,
    //   chunks:['zitisuc']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './chuangke.html',
    //   template: './src/views/me/chuangke.html',
    //   inject: true,
    //   chunks:['chuangke']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './yaoqing.html',
    //   template: './src/views/me/yaoqing.html',
    //   inject: true,
    //   chunks:['yaoqing']
    // }),
    new HtmlWebpackPlugin({
      filename: './zhuceck.html',
      template: './src/views/me/zhuceck.html',
      inject: true,
      chunks:['zhuceck']
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
