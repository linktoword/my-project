/*
 * @Description: webpack配置文件
 * @Author: zsf
 * @Date: 2020-06-11 07:04:28
 */ 
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
