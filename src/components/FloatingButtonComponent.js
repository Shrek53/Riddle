import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../constants/Theme';

export default class FloatingButtonComponent extends React.Component {
  render() {
    return (
      <ActionButton buttonColor={Theme.Global.Blue}>
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => console.log("notes tapped!")}
        >
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}
        >
          <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {}}
        >
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});
