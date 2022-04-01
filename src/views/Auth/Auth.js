import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../../services/users';
import { getUser } from '../../services/users';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentUser(getUser());
    history.push('/todos');
    signInUser(email, password);
  };

  return (
    <div>
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
