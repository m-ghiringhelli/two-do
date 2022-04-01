import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, signInUser } from '../../services/users';

export default function Auth({ currentUser, setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
    } catch (e) {
      setError(e);
    }
    setCurrentUser(getUser());
    history.push('/todos');
  };
  
  const redirectIfLoggedIn = () => currentUser && history.push('/todos');

  redirectIfLoggedIn();

  return (
    <div>
      <p>{error}</p> 
      <form onSubmit={handleSubmit}>
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
