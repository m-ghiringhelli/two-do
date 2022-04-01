export default function TodoList({ todos, setTodos, handleClick }) {
  
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => handleClick(todo)}>
          <p>{todo.task}</p>
        </div>
      ))}
    </>
  );
}
