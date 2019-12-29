import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import firebase from './lib/firebase';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Home from './Home';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  console.log("TCL: App -> currentUser", currentUser)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, [currentUser]);

  return (
    <Router>
      <Switch>
        <Route exact path='/login' render={props => <Login {...props} isLoggedIn={currentUser} />} />
        <PrivateRoute isLoggedIn={currentUser} path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
