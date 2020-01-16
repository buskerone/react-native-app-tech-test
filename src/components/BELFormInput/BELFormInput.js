import React from 'react';
import { Input } from 'react-native-elements';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const BELFormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      name={name}
      value={value}
      placeholderTextColor="#DDE1E5"
      placeholder={placeholder}
      leftIcon={<Icon name={iconName} size={20} color={iconColor} />}
      leftIconContainerStyle={styles.iconStyle}
      inputStyle={styles.input}
    />
  </View>
);

export default BELFormInput;