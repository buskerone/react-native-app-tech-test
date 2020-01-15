import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm, Controller } from "react-hook-form";
import styles from './styles';

export default function RegistrationFormScreen() {
  const { register, setValue, errors, triggerValidation, control, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const onChange = args => {
    return {
      value: args[0].nativeEvent.text,
    };
  };

  return(
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAwareScrollView style={styles.container}>
        <SafeAreaView>
          <Controller
            as={<TextInput placeholder="Nombre" style={styles.input} />}
            onChange={onChange}
            control={control}
            name="firstName"
          />
          <Controller
            as={<TextInput placeholder="Apellido" style={styles.input} />}
            name="lastName"
            control={control}
            onChange={onChange}
          />
          <Controller
            as={<TextInput placeholder="Teléfono" style={styles.input} />}
            name="phoneNumber"
            control={control}
            onChange={onChange}
          />
          <Controller
            as={<TextInput placeholder="Correo electrónico" style={styles.input} />}
            name="email"
            control={control}
            onChange={onChange}
          />
          <Controller
            as={<TextInput placeholder="Contraseña" style={styles.input} />}
            name="password"
            control={control}
            onChange={onChange}
          />
          <Controller
            as={<TextInput placeholder="Dirección" style={styles.input} />}
            name="address"
            control={control}
            onChange={onChange}
          />
          <View style={styles.termsAndConditionsContainer}>
            <Text style={styles.termsAndConditionsText}>Al presionar "Registrarme" estás de acuerdo con nuestros términos y condiciones de uso</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>REGISTRARME</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
}