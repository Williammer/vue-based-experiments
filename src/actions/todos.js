export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'


export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: todo
  }
};

export function removeTodo(idx) {
  return {
    type: REMOVE_TODO,
    idx: idx
  }
};

export function toggleTodo(idx) {
  return {
    type: TOGGLE_TODO,
    idx: idx
  }
};
