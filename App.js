import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, ScrollView, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

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

export default class App extends Component {
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
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <FlatList
            data = {this.state.countryData}
            extraData = {this.state}
            keyExtractor = {(x, i) => i}
            renderItem = { ({item}) =>
              <CheckBox
                title = {item.name}
                onPress = { () => this.onPressCheck(item.name) }
                checked = {this.state.checked.includes(item.name)}
              />
            }
          />
        </ScrollView>
        <View>
          <TouchableWithoutFeedback onPress={ () => this.onPressListChecked() }>
            <View>
              <Text>Checked Countries</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={ () => this.onPressGetStoredData() }>
            <View>
              <Text>Stored Data</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  text: {
    color: '#000',
  }
});
