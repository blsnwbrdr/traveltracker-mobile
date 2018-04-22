import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView, FlatList, View, Text } from 'react-native';

// STYLES
import MyListStyles from './../styles/MyListStyles';

export default class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      count: '',
    };
  }

  componentWillMount = () => {
    this.props.navigation.addListener('willFocus', () => {
      AsyncStorage.getItem('Visited', (err,result) => {
        const visitedData = JSON.parse(result);
        const {checked} = this.state;
        let list = [];
        if (visitedData !== null) {
          for (x = 0; x < visitedData.checked.length; x++) {
            list.push(visitedData.checked[x]);
          }
          console.log(list);
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
              {this.state.count} - Countries/Territories Visited
            </Text>
            <FlatList
              data = {this.state.checked}
              extraData = {this.state}
              keyExtractor = {(x, i) => i}
              renderItem = { ({item}) =>
                <Text style={MyListStyles.country}>
                  {item}
                </Text>
              }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
