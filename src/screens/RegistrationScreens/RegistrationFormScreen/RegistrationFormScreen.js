import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BELFormInput from '../../../components/BELFormInput';
import { registerUser } from '../../../redux/actions/user';
import styles from './styles';

const RegistrationFormScreen = props => {
  onSubmit = data => {
    console.log('data',data);
    props.registerUser(data);
  };

  return(
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAwareScrollView style={styles.container}>
        <SafeAreaView>
          <BELFormInput
            name="firstName"
            value={""}
            placeholder="Nombre"
            onChangeText={() => {}}
            iconName="ios-person"
            iconColor="#009E9D"
          />
          <BELFormInput
            name="lastName"
            value={""}
            placeholder="Apellido"
            onChangeText={() => {}}
            iconName="ios-person"
            iconColor="#009E9D"
          />
          <BELFormInput
            name="phoneNumber"
            value={""}
            placeholder="Teléfono"
            onChangeText={() => {}}
            iconName="ios-call"
            iconColor="#009E9D"
          />
          <BELFormInput
            name="email"
            value={""}
            placeholder="Correo electrónico"
            autocapitalize="none"
            onChangeText={() => {}}
            iconName="ios-mail"
            iconColor="#009E9D"
          />
          <BELFormInput
            name="password"
            value={""}
            placeholder="Contraseña"
            onChangeText={() => {}}
            secureTextEntry
            iconName="ios-lock"
            iconColor="#009E9D"
          />
          <BELFormInput
            name="address"
            value={""}
            placeholder="Dirección"
            onChangeText={() => {}}
            iconName="ios-pin"
            iconColor="#009E9D"
          />
          <TouchableWithoutFeedback>
            <Text style={styles.termsAndConditionsText}>Al presionar "Registrarme" estás de acuerdo con nuestros <Text style={styles.termsAndConditionsUnderlineText}>términos y condiciones de uso</Text></Text>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={styles.button}
            onPress={onSubmit}
          >
            <Text style={styles.buttonText}>REGISTRARME</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = {
  registerUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationFormScreen);