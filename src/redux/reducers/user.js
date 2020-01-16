import { REGISTER_USER } from '../actions/actionTypes';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        name: action.name,
        lastName: action.lastName,
        phoneNumber: action.phoneNumber,
        email: action.email,
        password: action.password,
        address: action.address,
      };
    default:
      return state;
  }
};

export default userReducer;
