import React, { Component } from 'react';
import { View, Text } from 'react-native';

// STYLES
import HeaderStyles from './../styles/HeaderStyles';

export default class Header extends Component {

  render() {
    return (
      <View style={HeaderStyles.container}>
        <Text style={HeaderStyles.text}>Travel Tracker</Text>
      </View>
    );
  }
}
