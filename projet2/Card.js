import React, {Component} from 'React';
import {View,StyleSheet,Text} from 'react-native';

export default class Card extends Component{

  render(){
    return(
      <View style={stylesCard.containerStyle}>
              {this.props.children}
      </View>
    )
  }
}
  const stylesCard = StyleSheet.create({
    containerStyle:{
      borderWidth: 1,
      borderColor: '#ddd',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    }
  });
