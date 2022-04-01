import React from 'react';

export default function TodoList({ todos }) {
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
