import React from 'react';
import { logout } from '../../services/users';
import './Header.css';

export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className='header'>
      <h1>to-do:</h1>
      <button onClick={handleLogout} className={!currentUser && 'hidden'}>logout</button>
    </div>
  );
}
