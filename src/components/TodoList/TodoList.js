import './TodoList.css';

export default function TodoList({ todos, setTodos, handleClick }) {
  
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => handleClick(todo)}>
          <p className={todo.completed && 'completed'}>{todo.task}</p>
        </div>
      ))}
    </>
  );
}
