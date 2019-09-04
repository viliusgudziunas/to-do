import {
  FETCH_TODOS,
  ADD_TODO,
  COMPLETE_TODO,
  UNDO_TODO,
  DELETE_TODO
} from './types';

export const fetchTodosAction = userId => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`).then(
    res =>
      res.json().then(todos =>
        dispatch({
          type: FETCH_TODOS,
          payload: todos
        })
      )
  );
};

export const addTodoAction = todo => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(todo)
  }).then(res =>
    res.json().then(newTodo =>
      dispatch({
        type: ADD_TODO,
        payload: newTodo
      })
    )
  );
};

export const completeTodoAction = todo => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ completed: true })
  }).then(res =>
    res.json().then(newTodo =>
      dispatch({
        type: COMPLETE_TODO,
        payload: { oldTodo: todo, newTodo }
      })
    )
  );
};

export const undoTodoAction = todo => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ completed: false })
  }).then(res =>
    res.json().then(newTodo =>
      dispatch({
        type: UNDO_TODO,
        payload: { oldTodo: todo, newTodo }
      })
    )
  );
};

export const deleteTodoAction = todo => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'DELETE'
  }).then(res => {
    if (res.ok) {
      dispatch({
        type: DELETE_TODO,
        payload: todo
      });
    }
  });
};
