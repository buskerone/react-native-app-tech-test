import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const RNATTErrorMessage = ({errorValue}) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
);

RNATTErrorMessage.propTypes = {
  errorValue: PropTypes.string,
};

export default RNATTErrorMessage;
