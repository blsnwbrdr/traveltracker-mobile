import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

// SCREENS
import CountryListScreen from './../screens/CountryListScreen';
import MyMapScreen from './../screens/MyMapScreen';
import MyListScreen from './../screens/MyListScreen';
import ShareScreen from './../screens/ShareScreen';

// STYLE CONSTANTS
import { colorAqua, colorBlue, colorLightGrey, colorDarkGrey } from './../styles/Constants';

export default TabNavigator(
  {
    'Countries': {
      screen: CountryListScreen,
    },
    'My Map': {
      screen: MyMapScreen,
    },
    'My List': {
      screen: MyListScreen,
    },
    'Sharing': {
      screen: ShareScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Countries':
            iconName = 'toggle-on';
            break;
          case 'My Map':
            iconName = 'map-o';
            break;
          case 'My List':
            iconName = 'list';
            break;
          case 'Sharing':
            iconName = 'slideshare';
        }
        return (
          <FontAwesome
            name={iconName}
            size={24}
            color={tintColor}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: colorLightGrey,
      },
      activeTintColor: colorAqua,
      inactiveTintColor: colorDarkGrey,
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
