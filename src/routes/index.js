import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes';
import PublicRoute from './Public';

const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route) => {
        return <PublicRoute key={route.path} {...route} />;
      })}
    </Switch>
  </Router>
);

export default Routes;
