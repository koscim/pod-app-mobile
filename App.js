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
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import Subscriptions from './src/Subscriptions';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './src/redux';
import Podcasts from './src/Podcasts';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// Create Redux store
const store = createStore(reducer, {}, applyMiddleware(apiMiddleware))

// Fetch podcast data
store.dispatch({ type: 'GET_PODCAST_DATA' });

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  SubscriptionIndex: { screen: Subscriptions },
  Podcasts: { screen: Podcasts }
})

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <SimpleApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
