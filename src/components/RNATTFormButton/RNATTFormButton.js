import React from 'react';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const RNATTFormButton = ({title, buttonType, buttonColor, ...rest}) => (
  <Button
    {...rest}
    title={title}
    buttonStyle={styles.button}
    titleStyle={styles.buttonText}
    type={buttonType}
  />
);

FormButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};

export default RNATTFormButton;
