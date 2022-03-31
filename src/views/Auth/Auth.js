import React, { useState } from 'react';
import { signInUser } from '../../services/users';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
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
