import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchToDos } from '../../services/todos';
import TodoList from '../../components/TodoList/TodoList';
import AddTodo from '../../components/AddTodo/AddTodo';

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
  }, [todos]);

  return (
    <div>
      <TodoList todos={todos} />
      <AddTodo {...{ todos, setTodos }} />
    </div>
  );
}
