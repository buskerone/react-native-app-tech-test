import React from 'react';
import { Input } from 'react-native-elements';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BELFormInput = ({
  name,
  placeholder,
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  autoCapitalize,
  showVerifyButton,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      name={name}
      placeholderTextColor="#DDE1E5"
      placeholder={placeholder}
      leftIcon={<Icon name={iconName} size={20} color={iconColor} />}
      rightIcon={showVerifyButton && <TouchableOpacity><Text style={styles.verifyText}>VERIFICAR</Text></TouchableOpacity>}
      leftIconContainerStyle={styles.iconStyle}
      inputStyle={styles.input}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
    />
  </View>
);

export default BELFormInput;