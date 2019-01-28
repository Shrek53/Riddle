import { createSwitchNavigator} from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import LoadingScreen from '../screens/LoadingScreen';


export default RootNavigator = createSwitchNavigator({
	Loading: LoadingScreen,
	Auth: AuthNavigator,
	App: DrawerNavigator,
});


