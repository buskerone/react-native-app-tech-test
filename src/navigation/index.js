import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegistrationFormScreen from '../screens/RegistrationScreens/RegistrationFormScreen';
import RegistrationLookScreen from '../screens/RegistrationScreens/RegistrationLookScreen';

const AppNavigator = createStackNavigator({
  SelectLook: {
    screen: RegistrationLookScreen,
  },
  RegisterForm: {
    screen: RegistrationFormScreen,
  },
}, {
  initialRouteParams: 'RegistrationFormScreen',
});

export default createAppContainer(AppNavigator);
