import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  AsyncStorage,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
import {Icon} from 'native-base';
import auth_bg_image from '../assets/images/auth_bg.png';
import logo_image from '../assets/images/robot-dev.png';

var { width, height } = Dimensions.get('window')

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email: '', 
      password: '',
      ConfirmPassword: '',
      showPass:true,
      showConPass:true,
      pressPass: false,
      pressConPass: false
    };
  }
  
  showPass = ()=>{
    if(this.state.pressPass==false){
      this.setState({showPass:false,pressPass:true})
    }
    else{
      this.setState({showPass:true,pressPass:false})
    }
  }

  showConPass = ()=>{
    if(this.state.pressConPass==false){
      this.setState({showConPass:false,pressConPass:true})
    }
    else{
      this.setState({showConPass:true,pressConPass:false})
    }
  }
  static navigationOptions = {
    header: null,
  };
  signIn= async ()=> {
    await AsyncStorage.setItem('userToken', 'apon');
    await AsyncStorage.setItem('email', this.state.email);
    await AsyncStorage.setItem('password', this.state.password);
    this.props.navigation.navigate("App")
  }

  signUp= ()=>{
    this.props.navigation.navigate("SignUp")
  }
  render() {
    return (
      <ImageBackground source={ auth_bg_image }  style={styles.container}>
        <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding" 
        keyboardVerticalOffset={125}
        >
          <View style={styles.logo_conainer}>
            <Image source={logo_image} style={styles.logo_image}/>
            <Text style={styles.logo_text}>Register to this Boilarplate</Text>
          </View>
          <View style={styles.input_container}>
          
            <View style={styles.name_container}>
              <Icon name='ios-person' size={28} color={'rgba(255,255,255,1)'}
              style={styles.input_icon}/>
              <TextInput 
              style={styles.input}
              placeholder='Full Name'
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underLineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}/>
            </View>

            <View style={styles.email_container}>
              <Icon name='ios-mail' size={28} color={'rgba(255,255,255,1)'}
              style={styles.input_icon}/>
              <TextInput 
              style={styles.input}
              placeholder='Email'
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underLineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              />
            </View>

            <View style={styles.password_container}>
              <Icon name='ios-lock' size={28} color={'rgba(255,255,255,1)'}
              style={styles.input_icon}/>
              <TextInput 
              style={styles.input}
              secureTextEntry={this.state.showPass}
              placeholder='Password'
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underLineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}/>
              <TouchableOpacity style={styles.eye_icon}
                  onPress={this.showPass.bind(this)}>
                <Icon name={this.state.pressPass?'ios-eye-off':'ios-eye'} size={26} 
                          color='rgba(255,255,255,0.7)' />
              </TouchableOpacity>
            </View>

            <View style={styles.confirm_password_container}>
              <Icon name='ios-lock' size={28} color={'rgba(255,255,255,1)'}
              style={styles.input_icon}/>
              <TextInput 
              style={styles.input}
              secureTextEntry={this.state.showConPass}
              placeholder='Confirm Password'
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underLineColorAndroid='transparent'
              onChangeText={(confirmPassword) => this.setState({confirmPassword})}
              value={this.state.confirmPassword}/>
              <TouchableOpacity style={styles.eye_icon}
                  onPress={this.showConPass.bind(this)}>
                <Icon name={this.state.pressConPass?'ios-eye-off':'ios-eye'} size={26} 
                color='rgba(255,255,255,0.7)'/>
              </TouchableOpacity>
            </View>

            <View style={styles.signup_container}>
                <TouchableOpacity style={styles.signup_touch} onPress={this.signIn} >
                  <Text style={styles.signup_text}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signin_container}>
              <Text style={styles.signin_line}>Already have an account? </Text>
              <TouchableOpacity style={styles.signin_touch} onPress={()=>this.props.navigation.navigate("Welcome")} >
                  <Text style={styles.signin_text}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  contain_items:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: 'gray'
  },
  row_items:{
    flexDirection: 'row',
    justifyContent: 'space-around'     
  },
  input_field:{
      color:'white',
      backgroundColor: '#99ccff',
      width:150
    },
    input_container:{
        top:50,
    },
    logo_conainer:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:20
    },
    logo_image:{
      width:150,
      height:150,
      opacity:0.7,
      borderRadius:150,
    },
    logo_text:{
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
      marginTop:10,
      opacity: 0.7,

    },
    input:{
      width: width - 55,
      height:45,
      fontSize:25,
      paddingLeft:45,
      backgroundColor:'rgba(0,0,0,0.35)',
      color:'rgba(255,255,255,0.7)',
      marginHorizontal:25,
      borderRadius:45
    },
    input_icon:{
      position:"absolute",
      top:8,
      left:37,
    },
    email_container:{
      marginBottom:10
    },
    name_container:{
      marginBottom:10
    },
    password_container:{
      marginBottom:10
    },
    confirm_password_container:{
      marginBottom:10
    },
    signup_container:{
      justifyContent:'center',
      alignItems:'center',
      marginBottom:30
    },
    eye_icon:{
      position:"absolute",
      top:8,
      right:37,
    },
    signup_touch:{
      width: width - 55,
      height:45,
      backgroundColor:'#2196F3',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:45,
      
    },
    signup_text:{
      color:'white',
      fontSize:25,
      textAlign:'center'
    },
    signin_touch:{
      width: 130,
      height:50,
      backgroundColor:'#2196F3',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10
    },
    signin_text:{
      color:'white',
      fontSize:18,
      textAlign:'center'
    },
    signin_container:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:30
    },
    signin_line:{
      color:'white',
      fontSize:18,
    },


});
