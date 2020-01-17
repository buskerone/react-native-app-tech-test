import {SET_LOOK} from './actionTypes';

export const setLook = id => ({
  type: SET_LOOK,
  id,
});

const look = {
  setLook,
};

export default look;
