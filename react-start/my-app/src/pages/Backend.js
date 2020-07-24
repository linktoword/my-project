/*
 * @Description: backend
 * @Author: zsf
 * @Date: 2020-07-24 17:07:40
 */ 
import React from 'react';
import { Link } from 'react-router-dom';

function Backend() {
  return (
    <div>
      <h1>backend页面</h1>
      <Link to="/">回首页</Link>
    </div>
  );
}

export default Backend;