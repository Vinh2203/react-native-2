/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';

export default class Header extends Component {

  constructor(props){
    super(props);
  }

  //truoc render
  componentWillMount(){}

  render() {
    const {textHeader,header} = styles
    return (
      <View style={header}>
        <Text style={textHeader}>{this.props.text}</Text>
      </View>
    );
  }

//sau render
  componentDidMount(){}
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  },

  textHeader: {
    fontSize: 20
  }
});
