import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { defaultStyles } from './styles';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 3, rows = 3;

export default class PodcastPoster extends Component {
  // Component prop types

  render() {
    const { podcast, podcast: { artistName, collectionName, artUrl }, onOpen } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(podcast)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: artUrl }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>{artistName}</Text>
        <Text style={styles.genre} numberOfLines={1}>{collectionName}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  },
  genre: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
});