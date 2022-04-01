import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchToDos } from '../../services/todos';

export default function Todos({ currentUser }) {
  const [todos, setTodos] = useState([]);
  const history = useHistory();

  !currentUser && history.push('/');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.task}</p>
        </div>
      ))}
    </div>
  );
}
