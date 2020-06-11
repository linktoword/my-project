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
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(csv|tsv)$/,
        loader: 'csv-loader'
      },
      {
        test: /\.xml$/,
        loader: 'xml-loader'
      }
    ]
  }
}
