import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00000040',
    padding: 20,
  },
  hairStyleImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  messageText: {
    fontSize: 13,
    color: 'black',
    textAlign: 'center',
    margin: 10
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 40,
    backgroundColor: '#009E9D',
    borderRadius: 4,
    width: Dimensions.get('window').width - 40
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
});
