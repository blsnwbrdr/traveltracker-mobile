import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import MainNavigation from './navigation/MainNavigation';

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
      return <MainNavigation />
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
