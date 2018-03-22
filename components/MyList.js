import React, { Component } from 'react';
import { AsyncStorage, FlatList, View, Text } from 'react-native';

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

  componentDidMount = () => {
    AsyncStorage.getItem('Visited', (err,result) => {
      const visitedData = JSON.parse(result);
      const {checked} = this.state;
      let list = [];
      if (visitedData !== null) {
        for (x = 0; x < visitedData.checked.length; x++) {
          list.push(visitedData.checked[x]);
        }
        this.setState({
          checked: list,
          count: visitedData.checked.length,
        });
      }
    });
  }

  render() {
    return (
      <View style={MyListStyles.container}>
        <Text style={MyListStyles.count}>
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
    );
  }
}
