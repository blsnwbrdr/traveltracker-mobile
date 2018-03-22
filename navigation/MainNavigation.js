import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView, View } from 'react-native';

// COMPONENTS
import Header from './../components/Header';
import List from './../components/List';
import BottomMenu from './../components/BottomMenu';

// STYLES
import MainNavStyles from './../styles/MainNavStyles';

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

export default class MainNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: countryData,
      checked: [],
    };
  }

  componentDidMount = () => {
    // console.log(this.state.checked);
  //   AsyncStorage.clear()
    // AsyncStorage.getItem('Visited', (err,result) => {
    //   const visitedData = JSON.parse(result);
    //   const {checked} = this.state;
    //   let list = [];
    //   if (visitedData !== null) {
    //     for (x = 0; x < visitedData.checked.length; x++) {
    //       list.push(visitedData.checked[x]);
    //     }
    //     this.setState({
    //       checked: list
    //     });
    //   }
    // });
  }

  onPressChecked = (name) => {
    const {checked} = this.state;
    if(!checked.includes(name)) {
      this.setState({checked: [...checked, name]});
      console.log('check')
      console.log(name);
    } else {
      this.setState({checked: checked.filter(a => a !== name)});
      console.log('uncheck')
      console.log(this.state.checked)
    }
  }

  onPressListChecked = () => {
    const {checked} = this.state;
    console.log({checked});
    AsyncStorage.setItem('Visited', JSON.stringify({checked}), () => {
    });
  }

  onPressGetStoredData() {
    const address = 'test@test.com';
    const subject = 'title';
    let list = [];
    AsyncStorage.getItem('Visited', (err,result) => {
      const visitedData = JSON.parse(result);
      if (visitedData !== null) {
        for (x = 0; x < visitedData.checked.length; x++) {
          list.push(visitedData.checked[x]);
        }
        let body = list.toString();
        body = body.replace(/,/g,', ');
        console.log(body);
        console.log(`mailto:test@test.com?subject=${subject}&body=${body}`);
        // Linking.openURL(`mailto:test@test.com?subject=${subject}&body=${body}`);
      } else {
        console.log('no data');
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={MainNavStyles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={MainNavStyles.scrollContainer}>
          <Header />
          <List
            countryData={this.state.countryData}
            onPressChecked={this.onPressChecked}
            checkedCountry={this.state.checked}
          />
        </ScrollView>
        <View style={MainNavStyles.bottomContainer}>
          <BottomMenu />
        </View>
      </SafeAreaView>
    );
  }
}
