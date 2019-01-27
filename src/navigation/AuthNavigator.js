import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
//import AuthLoadingScreen from '../screens/authLoadingScreen';

export default AuthStackNavigator= createStackNavigator({
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  })