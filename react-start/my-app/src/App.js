/*
 * @Description: app入口文件
 * @Author: zsf
 * @Date: 2020-07-09 18:11:19
 */ 
import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom'

import Nomatch from './pages/Nomatch';

import publicRoutes from './routes/publicRoutes';

function App() {
  return (
    <Router>
      <Switch>
        {
          publicRoutes.map(({path, component, ...routes}) => {
            return <Route key={path} path={path} component={component} {...routes} />
          })
        }
        <Route component={Nomatch}></Route>
      </Switch>
    </Router>
  );
}

export default App;