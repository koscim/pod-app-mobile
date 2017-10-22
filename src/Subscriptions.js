import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import PodcastPoster from './PodcastPoster';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

@connect(
  state => ({
    subscriptions: state.subscriptions,
    loading: state.loading
  }),
  dispatch => ({
    refresh: () => dispatch({ type: 'GET_SUBSCRIPTION_DATA'}),
    getSubscriptions: () => dispatch({ type: 'GET_SUBSCRIPTION_DATA'})
  })
)

export default class Subscriptions extends Component {
  state = {
    popupIsOpen: false,
  }

  openPodcast = (podcast) => {
    this.setState({
      popupIsOpen: true,
      podcast
    });
  }

  closePodcast = () => {
    this.setState({
      popupIsOpen: false,
    })
  }

  componentDidMount(){
    this.props.getSubscriptions()
  }

  render() {
    const { subscriptions, loading, refresh } = this.props;
    console.log(this.props)
    return (
      <View style={styles.container}>
        {subscriptions
          ? <ScrollView
            contentContainerStyle={styles.scrollContent}
            // Hide all scroll indicators
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={refresh}
              />
            }
          >
            {subscriptions.map((podcast, index) => <PodcastPoster
              podcast={podcast}
              onOpen={this.openPodcast}
              key={index}
            />)}
          </ScrollView>
          : <ActivityIndicator
              animating={loading}
              style={styles.loader}
              size="large"
            />
          }
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
