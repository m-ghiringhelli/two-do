import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchToDos, completeTodo } from '../../services/todos';
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
  }, []);
  
  const handleClick = async (todo) => {
    todo.completed ? await completeTodo(todo, false) : await completeTodo(todo, true);
    setTodos(await fetchToDos());
  };

  return (
    <div>
      <TodoList {...{ todos, setTodos, handleClick }} />
      <AddTodo {...{ todos, setTodos }} />
    </div>
  );
}
