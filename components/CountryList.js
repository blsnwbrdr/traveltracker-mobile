import React, { Component } from 'react';
import { AsyncStorage, StatusBar, Linking, ScrollView, View, Text, FlatList, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';

// STYLES
import ListStyles from './../styles/ListStyles';

// JSON DATA
const countryData = require('./../data/countries.json');

// SORT COUNTRY LIST
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
countryData.sort(compare);

export default class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: countryData,
      checked: [],
    };
  }

  componentDidMount = () => {
    // AsyncStorage.clear()
    AsyncStorage.getItem('Visited', (err,result) => {
      const visitedData = JSON.parse(result);
      const {checked} = this.state;
      let list = [];
      if (visitedData !== null) {
        for (x = 0; x < visitedData.checked.length; x++) {
          list.push(visitedData.checked[x]);
        }
        this.setState({
          checked: list
        });
      }
    });
  }

  onPressSetChecked = (name) => {
    this.props.transferChecked(name);
    const {checked} = this.state;
    if(!checked.includes(name)) {
      this.setState({checked: [...checked, name]});
      // console.log('checked')
      // console.log(name);
    } else {
      this.setState({checked: checked.filter(a => a !== name)});
      // console.log('unchecked')
      // console.log(this.state.checked)
    }
  }

  render() {
    return (
      <View style={ListStyles.container}>
        <FlatList
          data = {this.state.countryData}
          extraData = {this.state}
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
              onPress = { () => this.onPressSetChecked(item.name) }
              checked = {this.state.checked.includes(item.name)}
            />
          }
        />
      </View>
    );
  }
}
