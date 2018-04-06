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

export default class App extends Component {

  constructor(props){
    super(props);
  }

  //truoc render
  componentWillMount(){
  }

  render() {

    return (
      <View style={styles.div}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.number}>1</Text>
            <Text style={styles.char}>ABC</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.number}>2</Text>
            <Text style={styles.char}>DEF</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.number}>3</Text>
            <Text style={styles.char}>GHI</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.row}></View>
          <View style={styles.row}></View>
          <View style={styles.row}></View>
        </View>
        <View style={styles.column}>
          <View style={styles.row}></View>
          <View style={styles.row}></View>
          <View style={styles.row}></View>
        </View>
        <View style={styles.column}>
          <View style={styles.row}></View>
          <View style={styles.row}></View>
          <View style={styles.row}></View>
        </View>
      </View>
    );
  }

//sau render
  componentDidMount(){
  }
}

const styles = StyleSheet.create({
  div : {
    backgroundColor:'rgb(79, 215, 197)',
    flex:1
  },

  column:{
    flex:1,
    borderBottomColor:"black",
    borderBottomWidth:1,
    flexDirection:"row"
  },

  row:{
    flex:1,
    borderRightWidth:1,
    borderRightColor:"black",
    justifyContent:'center', //can giua theo chieu doc
    alignItems: 'center',
  },
  number:{
    fontSize:30,
    color:'white'
  },
  char:{
    fontSize:20,
    color:'white'
  }

});
