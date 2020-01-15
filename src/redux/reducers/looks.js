import { SET_LOOK } from '../actions/actionTypes';

const initialState = null;

const lookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOOK:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default lookReducer;
