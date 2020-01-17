import {REGISTER_USER} from './actionTypes';

export const registerUser = data => ({
  type: REGISTER_USER,
  firstName: data.firstName,
  lastName: data.lastName,
  phoneNumber: data.phoneNumber,
  email: data.email,
  // never do this - for testing purposes only!
  password: data.password,
  address: data.address,
});

const user = {
  registerUser,
};

export default user;
