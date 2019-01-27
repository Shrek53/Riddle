import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Header,Left,Body, Right, Icon, Title, Button } from 'native-base';
import Theme from '../../constants/Theme';

class CommonHeader extends React.Component{
    constructor(props) {
      super(props);
    }
  render(){
    return (
      <View style={styles.header_wrapper}>
        <Header style={styles.header}>
            <Left style={styles.left}>
            <Icon name='menu' style={styles.left_icon} onPress={()=>this.props.navigation.openDrawer()} />
            </Left>
            <Body style={styles.body} >
              <Title style={styles.body_title}>{this.props.title}</Title>
            </Body>
            <Right style={styles.right}>
            </Right>
        </Header>
        {/* <Text>hola amigos, vamanos polos harmanos</Text> */}
      </View>
    )
  }
}

export default withNavigation(CommonHeader);

const styles = StyleSheet.create({
  header_wrapper:{

  },
  header: { 
    backgroundColor: Theme.Global.Blue,
    height:36,
    elevation: 0,
  },
  left:{
    flex:1
  },
  left_icon:{
     fontSize:32, 
     color:'white'
  },
  body:{
    flex:1,
    alignItems:'center'
  },
  body_title:{
    textAlign:'left',
    color:'white'
  },
  right:{
  flex:1
}
});
