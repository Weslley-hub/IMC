import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from '../components/SignInScreen';
import SignUpScrenn from '../components/SignUpScreen';

const AuthNavigator = createSwitchNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScrenn
  },
  {
    initialRouteName: 'SignIn',
  }
);

export default AuthNavigator;
