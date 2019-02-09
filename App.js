import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,AsyncStorage} from 'react-native';
// import AppNavigator from './src/navigation/AppNavigator';
import RiddleNavigator from './src/navigation/home/RiddleNavigator';
import AppContext from './AppContext';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



// class AppProvider extends Component{
//   // constructor(){
//     state = {
//       points: 0
//     }
//   // }
//   render() {
//     return (
//       <AppContext.Provider value={{
//         state: this.state,
//         ChangePointsBy: (pts) => this.setState({
//           points: this.state.points + pts
//         })
//       }}>
//         {this.props.children}
//       </AppContext.Provider>
//     )
//   }
// }

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super()
    // this.get_points()
    this.state = {
      points:0
    }
  }
  // get_points = async ()=>{
  //   let points = await AsyncStorage.getItem('points');
  //   if(points==null){
  //     await AsyncStorage.setItem('points','0');
  //     points=0;
  //   }
  //   this.state.points=points;
  // }
  render() {
    return (
        <AppContext.Provider value={{
          state:this.state, 
          change_points_by: (pnt)=> this.setState({
            points:this.state.points+pnt
        })
        }}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            {/* <AppNavigator /> */}
            <RiddleNavigator />
          </View>
          </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
