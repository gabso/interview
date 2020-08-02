import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      localStorage.jwtToken ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/login" />
        )
    )} />
  );

