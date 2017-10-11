import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  RefreshControl
} from 'react-native';

export default class Movies extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {
      backgroundColor: 'grey',
    },
    headerTitleStyle: {
      color: 'white'
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Subscriptions</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                // take up all screen
    paddingTop: 20,         // start below status bar
  },
  loader: {
    flex: 1,
    alignItems: 'center',     // center horizontally
    justifyContent: 'center'  // center vertically
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});
