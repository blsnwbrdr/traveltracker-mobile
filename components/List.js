import React, { Component } from 'react';
import { AsyncStorage, StatusBar, Linking, ScrollView, View, Text, FlatList, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';

// STYLES
import ListStyles from './../styles/ListStyles';

export default class List extends Component {

  render() {
    return (
      <View style={ListStyles.container}>
        <FlatList
          data = {this.props.countryData}
          keyExtractor = {(x, i) => i}
          renderItem = { ({item}) =>
            <CheckBox
              containerStyle={ListStyles.listButton}
              textStyle={ListStyles.listButtonText}
              center
              iconRight
              uncheckedIcon='toggle-off'
              uncheckedColor='#2E4E74'
              checkedIcon='toggle-on'
              checkedColor='#2E4E74'
              title = {item.name}
              onPress = { () => this.props.onPressChecked(item.name) }
              checked = {this.props.checkedCountry.includes(item.name)}
            />
          }
        />
      </View>
    );
  }
}
