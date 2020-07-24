/*
 * @Description: 普通用户
 * @Author: zsf
 * @Date: 2020-07-24 17:38:43
 */ 
import Login from '../pages';
import Backend from '../pages/Backend';

const privateRoutes = [
  {
    path: '/backend',
    component: Backend,
    exact: true,
    role: 'user',       // 当前路由需要的角色权限
    backUrl: '/login'   // 不满足权限跳转的路由
  },
];

export default privateRoutes;
