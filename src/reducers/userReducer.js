import { SET_USER_ID } from '../actions/types';

const initialState = {
  userId: 0
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_ID:
      return {
        userId: payload
      };
    default:
      return state;
  }
};

export default userReducer;
