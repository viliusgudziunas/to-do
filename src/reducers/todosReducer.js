import { FETCH_TODOS, ADD_TODO, COMPLETE_TODO } from '../actions/types';

const initialState = {
  items: []
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TODOS:
      return {
        ...state,
        items: payload
      };
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, payload]
      };
    case COMPLETE_TODO:
      state.items.splice(
        state.items.indexOf(payload.oldTodo),
        1,
        payload.newTodo
      );
      return {
        ...state,
        items: [...state.items]
      };
    default:
      return state;
  }
};

export default todosReducer;
