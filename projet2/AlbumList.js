import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,ScrollView,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentWillMount() {
    this.getMusicFromApi()
  }

  async getMusicFromApi() {
    try {
      let response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
      let responseJson = await response.json();
      this.setState({albums: responseJson})
    } catch (error) {
      console.error(error);
    }
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
  }

  render() {
    return (<ScrollView>
      {this.renderAlbums()}
    </ScrollView>)
  }
}

class AlbumDetail extends Component {

  render() {

    const {herderContentStyle, thumbnailStyle, thumbnailContainerStyle,headerTextStyle,imageStyle} = styles;
    const {title, artist, thumbnail_image,image,url} = this.props.album;

    return (<Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{
              uri: thumbnail_image
            }}/>
        </View>
        <View style={herderContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
          <Image style={imageStyle} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button onPress={()=>Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>)
  }
}

const styles = {
  herderContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTextStyle:{
    fontSize: 20,
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  }
}
