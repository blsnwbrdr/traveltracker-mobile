import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StatusBar, FlatList, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// COMPONENTS
import Footer from './../components/Footer';

// STYLES
import MyListStyles from './../styles/MyListStyles';

// JSON DATA
const countryData = require('./../data/countries.json');

export default MyListScreen = ({ navigation }) => {
  const [checked, _setChecked] = useState([]);
  const checkedRef = useRef(checked);
  const setChecked = (newChecked) => {
    checkedRef.current = newChecked;
    _setChecked(newChecked);
  };
  const [count, _setCount] = useState('');
  const countRef = useRef(count);
  const setCount = (newCount) => {
    countRef.current = newCount;
    _setCount(newCount);
  };

  // GET STORED LIST OF CHECKED COUNTRIES
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      AsyncStorage.getItem('Visited', (err, result) => {
        const visitedData = JSON.parse(result);
        let list = [];
        if (visitedData && visitedData.checked !== null) {
          for (x = 0; x < visitedData.checked.length; x++) {
            list.push(visitedData.checked[x]);
          }
          list.sort();
          setChecked(list);
          setCount(visitedData.checked.length);
        } else {
          setChecked([]);
          setCount(0);
        }
      });
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={MyListStyles.safeViewContainer}>
      <StatusBar barStyle='light-content' />
      <View style={MyListStyles.container}>
        <FlatList
          data={checkedRef.current}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) => (
            <Text style={MyListStyles.country}>{item}</Text>
          )}
          ListHeaderComponent={
            <View style={MyListStyles.countContainer}>
              <Text style={MyListStyles.countText}>
                You have visited {countRef.current} (
                {Math.round((countRef.current / countryData.length) * 100)}% of{' '}
                {countryData.length}) countries/territories.
              </Text>
            </View>
          }
          ListFooterComponent={<Footer />}
        />
      </View>
    </SafeAreaView>
  );
};
