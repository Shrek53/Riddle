
import React from 'react';
import { SafeAreaView,View, Image, ScrollView } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItems,
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import {Icon} from 'native-base';
import HomeScreen  from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
  });

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
  });

// const MainBottomTab = createMaterialTopTabNavigator({
//     Home : HomeStack,
//     Settings: SettingsStack,
//   },{
//     tabBarPosition:"bottom",
//     navigationOptions:{
//     },
//     tabBarOptions:{
//       activeTintColor: "#00ccff",
//       inactiveTintColor: "#000000",
//       style:{
//         backgroundColor: "white"
//       },
//       indicatorStyle:{
//         height: 0
//       },
//       showIcon:'true'
//     },
//     swipeEnabled:true,
//   });




const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1}}>
      <View style={{height:200, backgroundColor:'#00ccff', alignItems:'center', justifyContent:'center'}}>
        <Image source={require("../assets/images/robot-dev.png")} style={{height:120, width:120, borderRadius:60}} />
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  )
  
class NullComponent extends React.Component {
    render(){
        return (null);
    }
}

export default AppDrawerNavigator = createDrawerNavigator({
        // Tab :{
        //     screen: MainBottomTab,
        //     navigationOptions:{
        //     drawerLabel: NullComponent
        //     }
        // },
        Home: {
            screen: HomeStack,
            navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon:({tintColor}) => (
                <Icon name='home' style={{fontSize:24, color: tintColor}}/>
            )
            }
        },
        Settings: {
            screen: SettingsStack,
            navigationOptions:{
            drawerLabel: 'Settings',
            drawerIcon:({tintColor}) =>(
                <Icon name='md-settings' style={{fontSize:24, color: tintColor}}/>
            )
            }
        }
    },{
        contentComponent: CustomDrawerComponent,
        contentOptions:{
            activeTintColor: '#00ccff',
    }
});

