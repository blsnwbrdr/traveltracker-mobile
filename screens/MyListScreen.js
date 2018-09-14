import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView, FlatList, View, Text } from 'react-native';

// COMPONENTS
import Footer from './../components/Footer';

// STYLES
import MyListStyles from './../styles/MyListStyles';

// JSON DATA
const countryData = require('./../data/countries.json');

export default class MyListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      count: '',
    };
  }

  componentDidMount = () => {
    this.props.navigation.addListener('willFocus', () => {
      AsyncStorage.getItem('Visited', (err,result) => {
        const visitedData = JSON.parse(result);
        const {checked} = this.state;
        let list = [];
        if (visitedData !== null) {
          for (x = 0; x < visitedData.checked.length; x++) {
            list.push(visitedData.checked[x]);
          }
          list.sort();
          this.setState({
            checked: list,
            count: visitedData.checked.length,
          });
        }
      });
    });
  }

  render() {
    return (
      <SafeAreaView style={MyListStyles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={MyListStyles.scrollContainer}>
          <View style={MyListStyles.countContainer}>
            <Text style={MyListStyles.countText}>
              You have visited {this.state.count} ({Math.round(this.state.count/countryData.length*100)}% of {countryData.length}) countries/territories.
            </Text>
          </View>
            <FlatList
              data = {this.state.checked}
              extraData = {this.state}
              keyExtractor = {(x, i) => i.toString()}
              renderItem = { ({item}) =>
                <Text style={MyListStyles.country}>
                  {item}
                </Text>
              }
            />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
