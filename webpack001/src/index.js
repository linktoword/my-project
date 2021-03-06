/*
 * @Description: webpack学习
 * @Author: zsf
 * @Date: 2020-06-10 22:20:14
 */ 
import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  btn.innerText = "clickMe";
  // Lodash now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.onclick = printMe;
  element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());