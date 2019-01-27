import { createSwitchNavigator} from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';


export default RootNavigator = createSwitchNavigator({
	Auth: AuthNavigator,
	App: DrawerNavigator,
});


