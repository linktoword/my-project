/*
 * @Description: 公共路由
 * @Author: zsf
 * @Date: 2020-07-24 17:38:19
 */ 
import Login from '../pages/Login';
import Home from '../pages/Home';

const publicRoutes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/',
    component: Home,
    exact: true,
  },
];

export default publicRoutes;
