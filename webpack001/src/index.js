/*
 * @Description: webpack学习
 * @Author: zsf
 * @Date: 2020-06-10 22:20:14
 */ 
import _ from 'lodash';
import './style.css';
import Icon from './mypng.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  let myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.log(Data);
  return element;
}

document.body.appendChild(component());