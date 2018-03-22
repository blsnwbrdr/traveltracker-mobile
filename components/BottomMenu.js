import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

// STYLES
import BottomMenuStyles from './../styles/BottomMenuStyles';

export default class BottomMenu extends Component {

  render() {
    return (
      <View style={BottomMenuStyles.bottomMenu}>
        <TouchableHighlight  style={BottomMenuStyles.bottomMenuButton} onPress={ () => this.props.onPressCountryList() }>
          <View>
            <Text style={BottomMenuStyles.bottomMenuButtonText}>Country List</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={BottomMenuStyles.bottomMenuButton} onPress={ () => this.props.onPressSave() }>
          <View>
            <Text style={BottomMenuStyles.bottomMenuButtonText}>Save</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  style={BottomMenuStyles.bottomMenuButton} onPress={ () => this.props.onPressMyList() }>
          <View>
            <Text style={BottomMenuStyles.bottomMenuButtonText}>My List</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
