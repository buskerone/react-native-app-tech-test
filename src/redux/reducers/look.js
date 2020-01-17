import {SET_LOOK} from '../actions/actionTypes';

const initialState = null;

const lookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOOK:
      return {id: action.id};
    default:
      return state;
  }
};

export default lookReducer;
