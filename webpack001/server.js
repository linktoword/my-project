/*
 * @Description: 中间件服务设置
 * @Author: zsf
 * @Date: 2020-06-11 21:25:01
 */ 

 const express = require('express');
 const webpack = require('webpack');
 const webpackDevMiddleware = require('webpack-dev-middleware');

 const app = express();
 const config = require('./webpack.config.js');
 const compiler = webpack(config);

 app.use(webpackDevMiddleware(compiler, {
   publicPath: config.output.publicPath
 }));

 app.listen(3000, function () {
   console.log('Example app listening on port 3000!\n')
 })