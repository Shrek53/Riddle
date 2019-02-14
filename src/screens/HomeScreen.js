import React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import GlobalStyles from '../assets/styles/GlobalStyles';
import RiddleNavigator from '../navigation/home/RiddleNavigator';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={styles.container}>
        <RiddleNavigator />
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 0,
    backgroundColor: "#fff"
  },
});
