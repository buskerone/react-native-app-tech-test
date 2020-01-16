import { REGISTER_USER } from '../actions/actionTypes';

const initialState = null;

const userReducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case REGISTER_USER:
      return {
        firstName: action.firstName,
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
