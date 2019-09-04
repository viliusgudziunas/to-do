import { SET_USER_ID } from './types';

// eslint-disable-next-line import/prefer-default-export
export const setUserIdAction = userId => dispatch => {
  dispatch({
    type: SET_USER_ID,
    payload: userId
  });
};
