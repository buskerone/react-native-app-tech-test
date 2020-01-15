import { REGISTER_USER } from './actionTypes';

export const registerUser = () => async dispatch => {
  dispatch({
    type: REGISTER_USER,
    payload: 'registration',
  });
};

const user = {
  registerUser,
};

export default user;
