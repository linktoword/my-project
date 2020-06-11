/*
 * @Description: webpack配置文件
 * @Author: zsf
 * @Date: 2020-06-11 07:04:28
 */ 
const path = require('path');
const HtmlWekpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 入口配置
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  // 开启打包调试模式
  devtool: 'inline-source-map',
  // 告知webpack-dev-server，将dist目录下的文件，作为服务可访问的文件
  devServer: {
    contentBase: './dist'
  },
  // 插件配置使用
  plugins: [
    // 自动清理dist文件夹内容插件
    new CleanWebpackPlugin(),
    // 生成dist文件夹下index.html文件
    new HtmlWekpackPlugin({
      title: 'Output Management'
    })
  ],
  // 输出配置
  output: {
    // 输出的包名子
    filename: '[name].bundle.js',
    // 输出的文件路径
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}
