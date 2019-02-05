import { createStackNavigator } from 'react-navigation';
import RiddleLevelListComponent from '../../components/RiddleLevelListComponent';
import RiddleDetailsComponent from '../../components/RiddleDetailsComponent';

export default RiddleNavigator= createStackNavigator({
    RiddleLevelsStack: RiddleLevelListComponent,
    RiddleDetailsStack: RiddleDetailsComponent
  })