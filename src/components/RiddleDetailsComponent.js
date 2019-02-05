import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button
} from "react-native";
import Swiper from "react-native-swiper";
import Theme from '../constants/Theme';

const renderPagination = (index=0, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "grey" }}>
        <Text style={styles.paginationText}>{index + 1} of {total}</Text>
      </Text>
    </View>
  );
};

export default class RiddleDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      arr:[{
              key: 1,
              value: "flying fish",
            },{
              key: 2,
              value: "Shark",
            },{
              key: 3,
              value: "Sting Ray",
            },{
              key: 4,
              value: "Dolphin",
            },]
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  
  level_btn_clicked = function(){
    return 1
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <View style={styles.middle}>
          <Text>Error: {error.message}</Text>
        </View>
      );
    } else if (!isLoaded) {
      return (
        <View style={styles.middle}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.middle}>
          <View style={styles.question_block}>
              <Text style={styles.question}>I have wings but I live under water. </Text>
          </View>
          <View style={styles.answers_block}>
          {
          this.state.arr.map( item => 
                <View style={styles.answer_button_wrapper} key={item.key}>
                  <Button title={item.value} style={styles.answer_button} onPress={this.level_btn_clicked}/>
                </View>
          )
          }
          </View>
        </View>                     

      );
    }
  }
}

const styles = StyleSheet.create({
  middle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  question_block:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    padding:5
  },
  question:{
    fontSize:24
  },
  answers_block:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  answer_button_wrapper:{
    padding:10
  },
  answer_button:{

  }

});
