import React, { useState } from 'react';
import { getUserId } from '../../services/users';
import { addTodo } from '../../services/todos';

export default function AddTodo({ todos, setTodos }) {
  const [todo, setTodo] = useState('');

  const createTodo = async (e) => {
    e.preventDefault();
    const newTodo = { task: todo, user_id: getUserId() };
    addTodo(newTodo);
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <input type='text' placeholder='add a new task' onChange={(e) => setTodo(e.target.value)}></input>
        <button>add task</button>
      </form>
    </div>
  );
}
