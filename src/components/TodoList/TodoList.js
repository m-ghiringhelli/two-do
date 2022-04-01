import React from 'react';
import { completeTodo } from '../../services/todos';

export default function TodoList({ todos }) {
//   const markCompleted = () => {
//     completeTodo(todo);
//   };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.task}</p>
        </div>
      ))}
    </>
  );
}
