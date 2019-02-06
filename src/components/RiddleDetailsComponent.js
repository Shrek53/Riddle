import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Button
} from "react-native";
import Theme from "../constants/Theme";

const renderPagination = (index = 0, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "grey" }}>
        <Text style={styles.paginationText}>
          {index + 1} of {total}
        </Text>
      </Text>
    </View>
  );
};

export default class RiddleDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    let riddle_group=this.props.navigation.getParam("riddle_group");
    let riddle_group_length=riddle_group.length;
    this.state = {
      riddle_group: riddle_group,
      riddle_group_pos: 0,
      riddle: riddle_group[0],
      riddle_group_length:riddle_group_length
    };
  }
  static navigationOptions = {
    header: null,
  };

  level_btn_clicked = ()=>{
    if (this.state.riddle_group_pos < this.state.riddle_group_length-1) {
    this.setState({
      riddle: this.state.riddle_group[this.state.riddle_group_pos + 1],
      riddle_group_pos: this.state.riddle_group_pos + 1
    });
    }
    else{
      this.props.navigation.navigate("RiddleLevelsStack");
    }
  };
  get_btm_bg_color=(index)=>{
    colors=['#B92625','#29BA5D','#A02CB5','#3382BC'];
    return colors[index];
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.stat_bar}>
          <Text style={styles.stat_bar_text}>{this.state.riddle_group_pos+1}/{this.state.riddle_group_length}</Text>
        </View>
        <View style={styles.question_block}>
          <Text style={styles.question_text}>{this.state.riddle.question}</Text>
        </View>
        <View style={styles.answers_block}>
          {this.state.riddle.options.map((item,index) => (
            <View style={{...styles.answer_button_wrapper, backgroundColor: this.get_btm_bg_color(index)}} key={item}>
              <TouchableOpacity
                style={styles.answer_button}
                onPress={this.level_btn_clicked}
              >
              <Text style={styles.btn_text} >{item}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#303030'
  },
  stat_bar:{
    flex:1,
    justifyContent:'flex-start'
  },
  stat_bar_text:{
    color:'white',
    fontSize:18,
    textAlign:'center'
  },
  question_block: {
    flex: 3,
    backgroundColor:"#000000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10
  },
  question_text: {
    fontSize: 24,
    fontWeight:'bold',
    color:'white',
    padding:15
  },
  answers_block: {
    flex: 6,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  answer_button_wrapper: {
    width:'100%',
    margin:10
  },
  answer_button: {
    padding: 10,
  },
  btn_text:{
    textAlign:'center',
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }
});
