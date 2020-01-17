import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const BELErrorMessage = ({errorValue}) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
);

export default BELErrorMessage;
