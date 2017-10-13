import React, { Component, PropTypes } from 'react';
import {
  Navigator,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { defaultStyles } from './stylesheets/styles.js';

export default class HomeScreen extends Component {
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
    const { navigate } = this.props.navigation;

    return (
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.welcome.title}>Welcome to Pod,</Text>
        <Text style={defaultStyles.welcome.subtitle}>the Intelligent Podcast Player</Text>
        <Button
        onPress={() => navigate('Chat', { user: 'ALEX' })}
        title='Login'
        />
        <Button
          onPress={() => navigate('SubscriptionIndex')}
          title='Subscriptions'
        />
        <Button
          onPress={() => navigate('Podcasts')}
          title='Podcast Index'
        />
      </View>
    );
  }
}
