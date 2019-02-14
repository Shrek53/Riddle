import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import RiddleNavigator from './src/navigation/home/RiddleNavigator';
import AppContext from './AppContext';

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      points:0
    }
  }

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
