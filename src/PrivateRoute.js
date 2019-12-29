import React from 'react';
import { Route } from "react-router-dom";
import { Redirect } from 'react-router';

const PrivateRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn
    ? <Route { ...props } />
    : <Redirect to="/login" />

export default PrivateRoute;
