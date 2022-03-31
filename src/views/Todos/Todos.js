import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Todos({ currentUser }) {
  const history = useHistory();

  !currentUser && history.push('/');

  return (
    <div>Todos</div>
  );
}
