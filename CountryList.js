import React, { Component } from 'react';
import { AsyncStorage, ScrollView, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import Styles from './styles/Styles';

// JSON DATA
const countryData = require('./data/countries.json');

// SORT COUNTRY LIST
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
countryData.sort(compare);

export class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: countryData,
      checked: [],
    };
  }

  onPressCheck(name) {
    const {checked} = this.state;
    if(!checked.includes(name)) {
      this.setState({checked: [...checked, name]});
    } else {
      this.setState({checked: checked.filter(a => a !== name)});
    }
  }

  onPressListChecked() {
    const {checked} = this.state;
    console.log({checked});
    AsyncStorage.setItem('Visited', JSON.stringify({checked}), () => {
    });
  }

  onPressGetStoredData() {
    AsyncStorage.getItem('Visited', (err,result) => {
      const visitedData = JSON.parse(result);
      for (x = 0; x < visitedData.checked.length; x++) {
        console.log(visitedData.checked[x]);
      }
    });
  }

  render() {
    return (
      <View style={Styles.countryListContainer}>
        <View style={Styles.scrollContainer}>
          <ScrollView>
            <FlatList
              data = {this.state.countryData}
              extraData = {this.state}
              keyExtractor = {(x, i) => i}
              renderItem = { ({item}) =>
                <CheckBox
                  containerStyle={Styles.listButton}
                  textStyle={Styles.listButtonText}
                  center
                  iconRight
                  uncheckedIcon='toggle-off'
                  uncheckedColor='#2E4E74'
                  checkedIcon='toggle-on'
                  checkedColor='#2E4E74'
                  title = {item.name}
                  onPress = { () => this.onPressCheck(item.name) }
                  checked = {this.state.checked.includes(item.name)}
                />
              }
            />
          </ScrollView>
        </View>
        <View style={Styles.bottomMenu}>
          <TouchableWithoutFeedback  onPress={ () => this.onPressListChecked() }>
            <View style={Styles.bottomMenuButton}>
              <Text style={Styles.bottomMenuButtonText}>Save List</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={ () => this.onPressGetStoredData() }>
            <View style={Styles.bottomMenuButton}>
              <Text style={Styles.bottomMenuButtonText}>Stored Data</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
