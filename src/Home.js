import React from 'react';
import { Redirect } from 'react-router';

function Home({ isLoggedIn }) {

  if (!isLoggedIn) {
    return <Redirect to='/login' />
  }

  return (
    <>
      <h1>Home page</h1>
      <p>
        This is a protected route.
      </p>
    </>
  )
}

export default Home;
