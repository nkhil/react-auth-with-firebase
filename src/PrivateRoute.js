import React from 'react';
import { Route } from "react-router-dom";
import { Redirect } from 'react-router';

// const PrivateRoute = ({ isLoggedIn, ...props }) =>
//   !!isLoggedIn
//     ? <Route { ...props } />
//     : <Redirect to="/login" />

const PrivateRoute = ({ component: RouteComponent, isLoggedIn, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={routeProps =>
        !!isLoggedIn ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  )
}

export default PrivateRoute;
