'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        // 代理到测试服
        target: 'http://qjwx.dianduode.com',
        //  target: 'http://qdwx.1sk1.com',
        secure: false,

        // 搞了半天。。target为具体域名，而非ip地址的形式时，这个属性必须为true
        // 参见：https://github.com/chimurai/http-proxy-middleware
        changeOrigin: true
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: '#source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: false
  },

  build: {
      // Template for login.html
      index: path.resolve(__dirname, '../dist/index.html'),

      // Paths
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: 'static',
      assetsPublicPath: './',

      /**
       * Source Maps
       */

      productionSourceMap: true,
      // https://webpack.js.org/configuration/devtool/#production
      devtool: '#source-map',

      // Gzip off by default as many popular static hosts such as
      // Surge or Netlify already gzip all static assets for you.
      // Before setting to `true`, make sure to:
      // npm install --save-dev compression-webpack-plugin
      productionGzip: false,
      productionGzipExtensions: ['js', 'css'],

      // Run the build command with an extra argument to
      // View the bundle analyzer report after build finishes:
      // `npm run build --report`
      // Set to `true` or `false` to always turn it on or off
      bundleAnalyzerReport: process.env.npm_config_report,
      autoPx2Rem: true
  }
}
