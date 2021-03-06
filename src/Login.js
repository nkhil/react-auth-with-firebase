import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router';
import firebase from './lib/firebase';

function Login({ history, isLoggedIn }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  }

  if (!!isLoggedIn) {
    return <Redirect to='/' />
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input 
          name='email'
          placeholder='email'
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          name='password'
          placeholder='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Sign in</button>
      </form>
    </>
  )
}

export default withRouter(Login);
