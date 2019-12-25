import React, { Component } from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

// SCREENS
import CountryListScreen from './../screens/CountryListScreen';
import MyMapScreen from './../screens/MyMapScreen';
import MyListScreen from './../screens/MyListScreen';
import ShareScreen from './../screens/ShareScreen';

// STYLE CONSTANTS
import { colorAqua, colorBlue, colorLightGrey, colorDarkGrey } from './../styles/Constants';

const BottomNavigation= createBottomTabNavigator(
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
    defaultNavigationOptions: ({ navigation }) => ({
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

const MainNavigation = createAppContainer(BottomNavigation);

export default MainNavigation;
