import { SET_LOOK } from './actionTypes';

export const setLook = () => async dispatch => {
  dispatch({
    type: SET_LOOK,
    payload: 'Selected look',
  });
};

const looks = {
  setLook,
};

export default looks;
