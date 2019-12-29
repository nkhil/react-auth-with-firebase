import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router';
import firebase from './lib/firebase';

function SignUp({ isLoggedIn, history }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = async (e) => {
    try {
      e.preventDefault();
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("TCL: signUpUser -> response", response)
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
      <h1>Sign up</h1>
      <form onSubmit={signUpUser}>
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
        <button>Sign up</button>
      </form>
    </>
  )
}

export default withRouter(SignUp);
