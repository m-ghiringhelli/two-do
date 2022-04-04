import './TodoList.css';

export default function TodoList({ todos, handleClick }) {
  
  return (
    <div className='list'>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => handleClick(todo)} className='task'>
          <p className={todo.completed && 'completed'}>{todo.task}</p>
        </div>
      ))}
    </div>
  );
}
