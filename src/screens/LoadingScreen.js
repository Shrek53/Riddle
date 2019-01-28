import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

export default class LoadingScreen extends React.Component {

  constructor(){
    super()
    this.loadApp()
  }

  loadApp = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    this.props.navigation.navigate(userToken?'App':'Auth')
  }

  render() {
    return (
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
            <ActivityIndicator/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});
