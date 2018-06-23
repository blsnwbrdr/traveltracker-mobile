import React, { Component } from 'react';
import { NetInfo, AsyncStorage, SafeAreaView, StatusBar, ScrollView, FlatList, View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { CheckBox } from 'react-native-elements';

// COMPONENTS
import Header from './../components/Header';
import Footer from './../components/Footer';

// STYLES
import CountryListStyles from './../styles/CountryListStyles';

// STYLE CONSTANTS
import { colorAqua, colorBlue } from './../styles/Constants';

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

export default class CountryListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: countryData,
      checked: [],
    };
  }

  componentDidMount = () => {
    this.checkConnection();
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

  // CHECK CONNECTION TO INTERNET
  checkConnection = () => {
    NetInfo.isConnected.fetch()
      .then( () => {
        NetInfo.isConnected.addEventListener('connectionChange', (isConnected) => {
          console.log(isConnected)
          const passParam = NavigationActions.setParams({
            params: { connection: isConnected },
            key: 'Sharing',
          });
          this.props.navigation.dispatch(passParam);
        });
      });
  }

  saveChecked = () => {
    const {checked} = this.state;
    AsyncStorage.setItem('Visited', JSON.stringify({checked}), () => {
    });
  }

  onPressSetChecked = (name) => {
    const {checked} = this.state;
    if(!checked.includes(name)) {
      this.setState({checked: [...checked, name]}, () => {
        this.saveChecked();
      });
    } else {
      this.setState({checked: checked.filter(a => a !== name)}, () => {
        this.saveChecked();
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={CountryListStyles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={CountryListStyles.scrollContainer}>
          <Header />
          <FlatList
            data = {this.state.countryData}
            extraData = {this.state}
            keyExtractor = {(x, i) => i}
            renderItem = { ({item}) =>
              <CheckBox
                containerStyle={CountryListStyles.listButton}
                textStyle={CountryListStyles.listButtonText}
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
          <Footer />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
