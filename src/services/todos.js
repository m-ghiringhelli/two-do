import { client, checkError } from './client.js';

export async function fetchToDos() {
  const response = await client.from('two-dos').select('*').order('id', { ascending: true });
  return checkError(response);
}

export async function addTodo(todo) {
  const response = await client.from('two-dos').insert([todo]);
  return checkError(response);
}

export async function completeTodo(todo, bool) {
  const response = await client.from('two-dos').update({ completed: bool }).match({ task: todo.task });
  return checkError(response);
}