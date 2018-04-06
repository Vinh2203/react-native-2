import React,{Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';

export default class Button extends Component{

  render(){
    const {buttonStyle,textStyle} = styles;
    return(
      <TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
          <Text style={textStyle}>{this.props.children}</Text>
      </TouchableOpacity>

    )
  }
}

const styles = {

  textStyle: {
    alignSelf: 'center',
    color: '#83e01a',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom : 10
  },

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}
