import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegistrationFormScreen from '../screens/RegistrationScreens/RegistrationFormScreen';
import RegistrationLookScreen from '../screens/RegistrationScreens/RegistrationLookScreen';

const AppNavigator = createStackNavigator({
  RegisterForm: {
    screen: RegistrationFormScreen,
  },
  SelectLook: {
    screen: RegistrationLookScreen,
  },
}, {
  initialRouteParams: 'RegsitrationFormScreen',
});

export default createAppContainer(AppNavigator);
