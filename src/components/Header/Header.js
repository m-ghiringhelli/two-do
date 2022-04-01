import React from 'react';
import { logout } from '../../services/users';

export default function Header({ setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
