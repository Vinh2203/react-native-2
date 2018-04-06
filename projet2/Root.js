import React, { Component } from 'react';
import Header from './Header';
import AlbumList from './AlbumList';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Root extends Component{

  render(){
    return(
        <View style={{flex: 1}}>
          <Header text={'Album'}/>
          <AlbumList />
        </View>
    )
  }
}
