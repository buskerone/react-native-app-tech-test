import React from 'react';
import {Button} from 'react-native-elements';
import styles from './styles';

const FormButton = ({title, buttonType, buttonColor, ...rest}) => (
  <Button
    {...rest}
    title={title}
    buttonStyle={styles.button}
    titleStyle={styles.buttonText}
    type={buttonType}
  />
);

export default FormButton;
