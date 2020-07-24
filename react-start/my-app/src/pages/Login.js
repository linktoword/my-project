/*
 * @Description: login
 * @Author: zsf
 * @Date: 2020-07-24 17:08:05
 */ 
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function Login() {
  return (
    <>
      <h1>登录页面</h1>
      <Link to="/">回首页</Link>
    </>
  );
}
export default Login;