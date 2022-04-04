import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, signInUser, signUpUser } from '../../services/users';
import './Auth.css';

export default function Auth({ currentUser, setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authType, setAuthType] = useState('sign-in');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      authType === 'sign-in' ?
        await signInUser(email, password) :
        await signUpUser(email, password);
    } catch (e) {
      setError(e);
    }
    setCurrentUser(getUser());
    history.push('/todos');
  };

  const handleClick = (button) => {
    authType !== button && setAuthType(button);
  };
  
  const redirectIfLoggedIn = () => currentUser && history.push('/todos');

  redirectIfLoggedIn();

  return (
    <div className='auth'>
      <p>{error}</p> 
      <span className={authType === 'sign-in' && 'selected'} onClick={() => handleClick('sign-in')}>sign-in</span>
      <span className={authType === 'sign-up' && 'selected'} onClick={() => handleClick('sign-up')}>sign-up</span>
      <form onSubmit={handleSubmit} className='authForm'>
        <label>
          email:
          <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label>
          password:
          <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
