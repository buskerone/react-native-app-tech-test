import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegistrationFormScreen from '../screens/RegistrationScreens/RegistrationFormScreen';
import RegistrationLookScreen from '../screens/RegistrationScreens/RegistrationLookScreen';

const AppNavigator = createStackNavigator({
  SelectLook: {
    screen: RegistrationLookScreen,
    navigationOptions: () => ({
      title: 'PELO, MAQUILLAJE',
      headerTitleStyle: {
        color: '#009E9D',
        fontSize: 13,
      },
    }),
  },
  RegisterForm: {
    screen: RegistrationFormScreen,
    navigationOptions: () => ({
      title: 'REGISTRO',
      headerTitleStyle: {
        color: '#009E9D',
        fontSize: 13,
      },
    }),
  },
}, {
  initialRouteParams: 'RegistrationFormScreen',
});

export default createAppContainer(AppNavigator);
