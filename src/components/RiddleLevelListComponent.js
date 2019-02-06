import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity
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

export default class RiddleLevelListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      arr:[1,2,3,4,5]
    };
  }
  static navigationOptions = {
    header: null,
  };
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
  
  level_btn_clicked = async ()=> {
    this.props.navigation.navigate("RiddleDetailsStack",{
    
      riddle_group : [
        {
          question: "I can fly but I live under water.",
          correct_answer: "Flying Fish",
          options:["Dolphin","Flying Fish","Shark","Sting Ray"],
          id:1
        },
        {
          question: "I am a mammal but I live under water.",
          correct_answer: "Dolphin",
          options:["Flying Fish","Shark","Dolphin","Sting Ray"],
          id:2
        },
        {
          question: "I have wings but I can not fly",
          correct_answer: "Sting Ray",
          options:["Dolphin","Sting Ray","Flying Fish","Shark"],
          id:3
        }
      ]
    })
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
        <ScrollView style={styles.container}>            
        <View style={styles.tagline_wrapper}>
          <Text style={styles.tagline_text}>Play to unlock more</Text>
        </View>
        {
         this.state.arr.map( item => 
              <View style={styles.level_button_wrapper} key={item}>
                {/* <Button title={`LEVEL ${item}`} style={styles.level_button} onPress={this.level_btn_clicked}/> */}
                <TouchableOpacity 
                  onPress={this.level_btn_clicked}
                  style={styles.level_button}
                  >
                  <Text style={styles.level_button_text}>{`LEVEL ${item}`}</Text>
                </TouchableOpacity>
              </View>
         )
         }                                        
        </ScrollView>
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
  container:{
    flex:1,
    backgroundColor:'#303030'
  },
  tagline_wrapper:{
    alignItems:'center',
    padding:10,
    margin:10
  },
  tagline_text:{
    color:'white',
    fontSize:24
  },
  level_button:{
    backgroundColor:'#F86903',
    padding:10,
    margin:5
  },
  level_button_text:{
    color:'white',
    textAlign:'center',
    fontSize:36,
    fontWeight:'bold'
  },
  level_button_wrapper:{
    padding:10
  }
});
