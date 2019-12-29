import React from 'react';
import { Redirect } from 'react-router';
import firebase from './lib/firebase';

function Home({ isLoggedIn }) {

  const signOutUser = () => firebase.auth().signOut();

  return (
    <>
      <h1>Home page</h1>
      <button onClick={signOutUser}>Sign out</button>
      <p>
        This is a protected route.
      </p>
    </>
  )
}

export default Home;
