import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 40,
    backgroundColor: '#009E9D',
    borderRadius: 4,
    margin: 20,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  termsAndConditionsText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 11,
    margin: 20,
  },
  termsAndConditionsUnderlineText: {
    color: '#009E9D',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 11,
  },
  input: {
    backgroundColor: 'white',
    borderBottomColor: '#DDE1E5',
    borderBottomWidth: 1,
    height: 40,
    padding: 10,
    marginTop: 10,
    margin: 20,
    borderRadius: 4,
  }
});