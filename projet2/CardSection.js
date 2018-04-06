import React, {Component} from 'React';
import {View,StyleSheet,Text} from 'react-native';

export default class CardSection extends Component{

  render(){
    return(
      <View style={stylesCardSection.containerStyle}>
        {this.props.children}
      </View>
    )
  }
}

const stylesCardSection = StyleSheet.create({
  containerStyle:{
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});
