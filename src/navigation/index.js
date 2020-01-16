import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegistrationFormScreen from '../screens/RegistrationScreens/RegistrationFormScreen';
import RegistrationLookScreen from '../screens/RegistrationScreens/RegistrationLookScreen';

const headerTitleStyle = {
  color: '#009E9D',
  fontSize: 13,
};

const AppNavigator = createStackNavigator({
  SelectLook: {
    screen: RegistrationLookScreen,
    navigationOptions: () => ({
      title: 'PELO, MAQUILLAJE',
      headerTitleStyle
    }),
  },
  RegisterForm: {
    screen: RegistrationFormScreen,
    navigationOptions: () => ({
      title: 'REGISTRO',
      headerTitleStyle
    }),
  },
}, {
  initialRouteParams: 'RegistrationFormScreen',
});

export default createAppContainer(AppNavigator);
