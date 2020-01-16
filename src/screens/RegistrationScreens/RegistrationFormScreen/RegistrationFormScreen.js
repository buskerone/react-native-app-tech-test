import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as Yup from 'yup';
import BELFormInput from '../../../components/BELFormInput';
import BELErrorMessage from '../../../components/BELErrorMessage';
import { registerUser } from '../../../redux/actions/user';
import styles from './styles';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .label('firstName')
    .required('Ingresa tu nombre')
    .min(2, 'Debe tener al menos 2 caractéres'),
  lastName: Yup.string()
    .label('lastName')
    .required('Ingresa tu apellido')
    .min(2, 'Debe tener al menos 2 caractéres'),
  phoneNumber: Yup.string()
    .label('phoneNumber')
    .required('Ingresa un número de teléfono')
    .length(9, 'Debe tener 9 caractéres'),
  email: Yup.string()
    .label('email')
    .email('Ingresa un email válido')
    .required('Favor ingresa un email'),
  password: Yup.string()
    .label('password')
    .required('Ingresa una contraseña')
    .min(6, 'La contraseña debe ser de al menos 6 caractéres'),
  address: Yup.string()
    .label('address')
    .required('Ingresa tu dirección')
})

const RegistrationFormScreen = props => {

  handleSubmit = values => {
    if (values.firstName.length > 0 &&
      values.lastName.length > 0 &&
      values.phoneNumber.length > 0 &&
      values.email.length > 0 &&
      values.password.length > 0 &&
      values.address.length > 0) {
        props.registerUser(values);
        props.navigation.navigate('SelectLook');
    }
  }

  return(
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAwareScrollView style={styles.container}>
        <SafeAreaView>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phoneNumber: '',
              email: '',
              password: '',
              address: ''
            }}
            onSubmit={values => {
              this.handleSubmit(values)
            }}
            validationSchema={validationSchema}>
            {({
              handleChange,
              values,
              handleSubmit,
              errors,
              touched,
            }) => (
            <View>
              <BELFormInput
                name="firstName"
                value={values.firstName}
                placeholder="Nombre"
                onChangeText={handleChange('firstName')}
                iconName="ios-person"
                iconColor="#009E9D"
              />
              <BELErrorMessage errorValue={touched.firstName && errors.firstName} />
              <BELFormInput
                name="lastName"
                value={values.lastName}
                placeholder="Apellido"
                onChangeText={handleChange('lastName')}
                iconName="ios-person"
                iconColor="#009E9D"
              />
              <BELErrorMessage errorValue={touched.lastName && errors.lastName} />
              <BELFormInput
                name="phoneNumber"
                value={values.phoneNumber}
                placeholder="Teléfono"
                onChangeText={handleChange('phoneNumber')}
                iconName="ios-call"
                iconColor="#009E9D"
                keyboardType="number-pad"
                showVerifyButton={true}
              />
              <BELErrorMessage errorValue={touched.phoneNumber && errors.phoneNumber} />
              <BELFormInput
                name="email"
                value={values.email}
                placeholder="Correo electrónico"
                autocapitalize="none"
                onChangeText={handleChange('email')}
                iconName="ios-mail"
                iconColor="#009E9D"
              />
              <BELErrorMessage errorValue={touched.email && errors.email} />
              <BELFormInput
                name="password"
                value={values.password}
                placeholder="Contraseña"
                onChangeText={handleChange('password')}
                secureTextEntry
                iconName="ios-lock"
                iconColor="#009E9D"
              />
              <BELErrorMessage errorValue={touched.password && errors.password} />
              <BELFormInput
                name="address"
                value={values.address}
                placeholder="Dirección"
                onChangeText={handleChange('address')}
                iconName="ios-pin"
                iconColor="#009E9D"
              />
              <BELErrorMessage errorValue={touched.address && errors.address} />
              <TouchableWithoutFeedback>
                <Text style={styles.termsAndConditionsText}>Al presionar "Registrarme" estás de acuerdo con nuestros <Text style={styles.termsAndConditionsUnderlineText}>términos y condiciones de uso</Text></Text>
              </TouchableWithoutFeedback>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>REGISTRARME</Text>
              </TouchableOpacity>
            </View>
            )}
          </Formik>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
}

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