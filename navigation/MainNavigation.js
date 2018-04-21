import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

// SCREENS
import CountryListScreen from './../screens/CountryListScreen';
import MyListScreen from './../screens/MyListScreen';

// STYLE CONSTANTS
import { colorAqua, colorBlue, colorDarkGrey } from './../styles/Constants';

export default TabNavigator(
  {
    CountryList: {
      screen: CountryListScreen,
    },
    MyList: {
      screen: MyListScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'CountryList':
            iconName = 'ios-list';
            break;
          case 'MyList':
            iconName = 'ios-search';
        }
        return (
          <Ionicons
            name={iconName}
            size={25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: colorAqua,
      },
      activeTintColor: 'white',
      inactiveTintColor: 'white',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);


// COMPONENTS
// import Header from './../components/Header';
// import CountryList from './../components/CountryList';
// import MyList from './../components/MyList';
// import BottomMenu from './../components/BottomMenu';

// STYLES
// import MainNavStyles from './../styles/MainNavStyles';

// JSON DATA
// const countryData = require('./../data/countries.json');

// SORT COUNTRY LIST
// function compare(a,b) {
//   if (a.name < b.name)
//     return -1;
//   if (a.name > b.name)
//     return 1;
//   return 0;
// }
// countryData.sort(compare);

// export default class MainNavigation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       countryList: true,
//       checked: [],
//       saved: [],
//     };
//   }
//
//   componentDidMount = () => {
//     // AsyncStorage.clear()
//     AsyncStorage.getItem('Visited', (err,result) => {
//       const visitedData = JSON.parse(result);
//       const {checked} = this.state;
//       let list = [];
//       if (visitedData !== null) {
//         for (x = 0; x < visitedData.checked.length; x++) {
//           list.push(visitedData.checked[x]);
//         }
//         this.setState({
//           checked: list
//         });
//         console.log(this.state.checked);
//       }
//     });
//   }
//
//   transferChecked = (name) => {
//     const {checked} = this.state;
//     if(!checked.includes(name)) {
//       this.setState({checked: [...checked, name]});
//       console.log('checked')
//       console.log(name);
//     } else {
//       this.setState({checked: checked.filter(a => a !== name)});
//       console.log('unchecked')
//       console.log(this.state.checked)
//     }
//   }
//
//   onPressSave = () => {
//     const {checked} = this.state;
//     console.log({checked});
//     AsyncStorage.setItem('Visited', JSON.stringify({checked}), () => {
//     });
//   }
//
//   onPressCountryList = () => {
//     this.setState({
//       countryList: true,
//     })
//   }
//
//   onPressMyList = () => {
//     this.setState({
//       countryList: false,
//     })
//   }
//
//   render() {
//     const countryList = this.state.countryList;
//     const listScreen = countryList ? (
//       <CountryList transferChecked={this.transferChecked} />
//     ) : (
//       <MyList saved={this.state.saved}/>
//     );
//
//     return (
//       <SafeAreaView style={MainNavStyles.container}>
//         <StatusBar barStyle="light-content" />
//         <ScrollView style={MainNavStyles.scrollContainer}>
//           <Header />
//           {listScreen}
//         </ScrollView>
//         <View style={MainNavStyles.bottomContainer}>
//           <BottomMenu
//             onPressCountryList={this.onPressCountryList}
//             onPressSave={this.onPressSave}
//             onPressMyList={this.onPressMyList}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }
