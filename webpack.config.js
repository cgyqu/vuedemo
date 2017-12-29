var webpack = require("webpack")
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var path = require('path')

module.exports = {
  entry: "./app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    publicPath: '/',
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    inline: true,
    port: 7000,
    compress: true,
    publicPath: '/',
    watchOptions: {
      poll: false,
    },
    overlay: {
      warnings: false,
      errors: true,
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [path.resolve(__dirname, 'app')]
      }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin()
  ]
}