import { FETCH_TODOS, ADD_TODO, COMPLETE_TODO } from './types';

const todos = [
  {
    id: 1,
    name: 'Work Out',
    completed: false
  },
  {
    id: 2,
    name: 'Clean Room',
    completed: false
  }
];

export const fetchTodosAction = () => dispatch => {
  dispatch({
    type: FETCH_TODOS,
    payload: todos
  });
};

export const addTodoAction = todo => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: todo
  });
};

export const completeTodoAction = todo => dispatch => {
  dispatch({
    type: COMPLETE_TODO,
    payload: {
      oldTodo: todo,
      newTodo: { id: todo.id, name: todo.name, completed: true }
    }
  });
};
