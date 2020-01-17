import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  hairStyleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 3, // approximate a square
  },
  hairStyleImage: {
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3,
  },
  itemBlank: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});
