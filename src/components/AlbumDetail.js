import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {
  render() {
      const { title, artist, thumbnail_image, image, url } = this.props.album;
      const { headerContentStyle, 
              headerTextStyle, 
              thumbnailStyle, 
              thumbnailContainerStyle, 
              imageStyle 
      } = styles;

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)} >
              Buy Now
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  headerContentStyle: {
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    width: '100%'
    // flex: 1 // kalo flex 1, dia bakal ngisi penuh width sepenuh lebar layar
  }
};

export default AlbumDetail;
