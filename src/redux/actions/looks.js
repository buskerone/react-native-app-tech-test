import { SET_LOOK } from './actionTypes';

export const setLook = payload => async dispatch => {
  dispatch({
    type: SET_LOOK,
    payload: payload,
  });
};

const looks = {
  setLook,
};

export default looks;
