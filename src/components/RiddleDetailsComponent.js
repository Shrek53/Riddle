import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,} from "react-native";
import { AdMobBanner } from 'react-native-admob'
import AppContext from '../../AppContext';

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

  riddle_answer_submit(change_points_by,pnt){
    change_points_by(pnt)
    this.change_riddles()
  }

  change_riddles = ()=>{
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
      <AppContext.Consumer>
        {(data) => (
      <View style={styles.container}>
        <View style={styles.stat_bar}>
        <View style={styles.stat_bar_points_wrapper}>
          <Text style={styles.stat_bar_points_text}>Pts: {data.state.points}</Text>
        </View>
        <View style={styles.stat_bar_pagination_wrapper}>
          <Text style={styles.stat_bar_pagination_text}>{this.state.riddle_group_pos+1}/{this.state.riddle_group_length}</Text>
        </View>
        </View>
        <View style={styles.question_block}>
          <Text style={styles.question_text}>{this.state.riddle.question}</Text>
        </View>
        <View style={styles.answers_block}>
          {this.state.riddle.options.map((item,index) => (
            <View style={{...styles.answer_button_wrapper, backgroundColor: this.get_btm_bg_color(index)}} key={item}>
              <TouchableOpacity
                style={styles.answer_button}
                onPress={ ()=>{this.riddle_answer_submit(data.change_points_by, this.state.riddle.correct_answer==item?10:-2) }}
              >
              <Text style={styles.btn_text} >{item}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
        <AdMobBanner
          adSize="smartBanner"
          // adUnitID="ca-app-pub-3266208902155663/2483160559"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          onAdFailedToLoad={error => console.error(error)}
        />
        </View>
      </View>
        )}
      </AppContext.Consumer>
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
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    // paddingLeft:10,
  },
  stat_bar_points_wrapper:{
    // flex:1,
    // alignItems:'center',
    // justifyContent: 'space-around',
  },
  stat_bar_points_text:{
    color:'white',
    fontSize:18,
  },
  stat_bar_pagination_wrapper:{
    // flex:2,
    // justifyContent: 'center',
    // alignItems:'center'
  },
  stat_bar_pagination_text:{
    color:'white',
    fontSize:18,
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
