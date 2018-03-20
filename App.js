import React, { Component } from 'react';
import { StatusBar, View, Text } from 'react-native';
import { AppLoading, Font } from 'expo';
import { CountryList } from './CountryList';
import Styles from './styles/Styles';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={Styles.container}>
          <StatusBar barStyle="dark-content" />
          <View style={Styles.headerContainer}>
            <Text style={Styles.titleText}>Travel Tracker</Text>
          </View>
          <CountryList />
        </View>
      );
    }
  }

  // ASYNC LOAD FONTS
  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'chewy': require('./assets/fonts/Chewy.ttf'),
        'titillium-web': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
      }),
    ]);
  };
  _handleLoadingError = error => {
    console.warn(error);
  };
  _handleFinishLoading = () => {
    this.setState({
      isLoadingComplete: true
    });
  };
}
