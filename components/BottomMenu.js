import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

// STYLES
import BottomMenuStyles from './../styles/BottomMenuStyles';

export default class BottomMenu extends Component {

  render() {
    return (
      <View style={BottomMenuStyles.bottomMenu}>
        <TouchableHighlight style={BottomMenuStyles.bottomMenuButton} onPress={ () => this.onPressListChecked() }>
          <View>
            <Text style={BottomMenuStyles.bottomMenuButtonText}>Save</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  style={BottomMenuStyles.bottomMenuButton} onPress={ () => this.onPressGetStoredData() }>
          <View>
            <Text style={BottomMenuStyles.bottomMenuButtonText}>My List</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
