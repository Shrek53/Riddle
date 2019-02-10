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
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from "react-native";
import {Icon} from 'native-base';
import Modal from "react-native-modal";
import AppContext from '../../AppContext';

export default class RiddleLevelListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      arr:[0,1,2,3,4],
      points_needed:0,
      isModalVisible: false
    };
  }
  toggleModal(modal_visibility) {
    this.setState({isModalVisible: modal_visibility});
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
  riddle_list= [
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
  ];
  async level_btn_clicked(points,level_number) {
    if(level_number==0){
      this.props.navigation.navigate("RiddleDetailsStack",{
    
        riddle_group : this.riddle_list
      })
    }
    else if(points >= level_number*20){
      this.props.navigation.navigate("RiddleDetailsStack",{
    
        riddle_group : this.riddle_list
      })
    }
    else{
      this.toggleModal(true);
      this.setState({points_needed:level_number*20-points})
    }
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
        <AppContext.Consumer>
          {(context_data)=>(
            <ScrollView style={styles.container}>
              
              <Modal 
                isVisible={this.state.isModalVisible} 
                onBackButtonPress={()=>this.toggleModal(false)}
			          backdropOpacity={0.9}
			          hideModalContentWhileAnimating={true}
                style={styles.modal_wrapper}>
                <View style={styles.modal_main_view}>
                  <View style={styles.close_btn_wrapper}>
                    <TouchableOpacity onPress={()=>this.toggleModal(false)}>
                    <Text style={styles.modal_close_button}>X</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modal_message_wrapper}>
                    <Text style={styles.modal_text}>{this.state.points_needed} more points needed to unlock this level. To earn more points</Text>
                  </View>
                  <View style={styles.advertize_btn_wrapper}>
                    <TouchableOpacity onPress={()=>this.toggleModal(false)}>
                    <Text style={styles.modal_watch_ad_button}> Watch advertize</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              
              
              <View style={styles.tagline_wrapper}>
                <Text style={styles.tagline_text}>Play to unlock more</Text>
              </View>
              {
              this.state.arr.map( (item) => 
              <View style={styles.level_button_wrapper} key={item}>
                <TouchableOpacity 
                  onPress={()=>this.level_btn_clicked(context_data.state.points, item)}
                  style={styles.level_button}
                  >
                  <Text style={styles.level_button_text}>{`LEVEL ${item}`}</Text>
                </TouchableOpacity>
              </View>
                )
              }                                        
            </ScrollView>
          )}          
        </AppContext.Consumer>
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
  },
  modal_wrapper:{
    // flex:1,
    // alignItems:'center',
    // justifyContent:'center',
    // backgroundColor:'#303030'
  },
  modal_text:{
    color: 'white',
    fontSize:24,
    fontWeight:'bold',
    paddingBottom:20
  },
  modal_main_view:{
	flex:1,
	
  },
  close_btn_wrapper:{
	//   flexDirection:'row-reverse',
	// justifyContent:'flex-end',
	// alignItems:'flex-end',
	flex:1,
	width:55,
    padding:5
  },
  modal_message_wrapper:{
	flex:1,
	alignItems:'center'
  },
  advertize_btn_wrapper:{
	flex:1,
	alignItems:'center'
  },
  
  modal_close_button:{
    borderRadius:10,
    backgroundColor:'red',
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    padding:10,
    // width:90
  },
  modal_watch_ad_button:{
    borderRadius:10,
    backgroundColor:'red',
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    padding:10,
    // width:90
  }

});
