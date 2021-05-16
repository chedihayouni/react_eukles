import React from 'react';
import { Route, Redirect } from 'react-router';
import Base from '../Base';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (localStorage.getItem('access_token') ? (
      <Base>
        <Component {...props} />
      </Base>
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))}
  />
);

export default PrivateRoute;
