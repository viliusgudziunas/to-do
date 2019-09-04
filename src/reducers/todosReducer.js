import {
  FETCH_TODOS,
  ADD_TODO,
  COMPLETE_TODO,
  UNDO_TODO,
  DELETE_TODO
} from '../actions/types';

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
        items: [payload, ...state.items]
      };
    case COMPLETE_TODO:
    case UNDO_TODO:
      state.items.splice(
        state.items.indexOf(payload.oldTodo),
        1,
        payload.newTodo
      );
      return {
        ...state,
        items: [...state.items]
      };
    case DELETE_TODO:
      state.items.splice(state.items.indexOf(payload), 1);
      return {
        ...state,
        items: [...state.items]
      };
    default:
      return state;
  }
};

export default todosReducer;
