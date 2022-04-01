import { client, checkError } from './client.js';

export async function fetchToDos() {
  const response = await client.from('two-dos').select('*');
  return checkError(response);
}

export async function addTodo(todo) {
  const response = await client.from('two-dos').insert([todo]);
  return checkError(response);
}