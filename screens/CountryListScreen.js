import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';

// COMPONENTS
import Header from './../components/Header';
import Footer from './../components/Footer';

// STYLE CONSTANTS
import { colorPrimary } from './../styles/Constants';

// STYLES
import CountryListStyles from './../styles/CountryListStyles';

// JSON DATA
const countryData = require('./../data/countries.json');

// SORT COUNTRY LIST
function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
countryData.sort(compare);

export default CountryListScreen = () => {
  const [checked, _setChecked] = useState([]);
  const checkedRef = useRef(checked);
  const setChecked = (newChecked) => {
    checkedRef.current = newChecked;
    _setChecked(newChecked);
  };
  const [selectedData, setSelectedData] = useState(countryData);
  const [selectedContinent, setSelectedContinent] = useState('');

  // GET STORED LIST OF CHECKED COUNTRIES
  useEffect(() => {
    // AsyncStorage.clear();
    AsyncStorage.getItem('Visited', (err, result) => {
      const visitedData = JSON.parse(result);
      let list = [];
      if (visitedData && visitedData.checked !== null) {
        for (x = 0; x < visitedData.checked.length; x++) {
          list.push(visitedData.checked[x]);
        }
        setChecked(list);
      }
    });
  }, []);

  // DISPLAY LIST OF COUNTRIES BASED ON CONTINENT SELECTED
  const displaySelectedData = (continent) => {
    setSelectedContinent(continent);
    let list = [];
    if (continent !== 'All') {
      for (x = 0; x < countryData.length; x++) {
        if (continent === countryData[x].continent) {
          list.push(countryData[x]);
        }
      }
      setSelectedData(list);
    } else {
      setSelectedData(countryData);
    }
  };

  // SAVE CHECKED COUNTRIES TO LOCAL STORAGE
  const saveChecked = (data) => {
    AsyncStorage.setItem('Visited', JSON.stringify({ checked: data }));
  };

  // SET COUNTRY AS CHECKED WHEN PRESSED
  const onPressSetChecked = (name) => {
    if (!checkedRef.current.includes(name)) {
      setChecked([...checkedRef.current, name]);
      saveChecked(checkedRef.current);
    } else {
      setChecked(checkedRef.current.filter((a) => a !== name));
      saveChecked(checkedRef.current);
    }
  };

  // RESET CHECKED DATA
  const onPressResetCheckedData = () => {
    Alert.alert(
      'Reset Checked Data',
      'Are you sure? This will clear ALL checked countries/territories.',
      [
        { text: 'Cancel' },
        {
          text: 'Yes',
          onPress: () => {
            setChecked([]);
            saveChecked(null);
          },
        },
      ]
    );
  };

  // FLAT LIST - KEY EXTRACTOR
  const keyExtractor = (item) => item.name.toString();

  // CHECKBOX - RENDER ITEM
  const renderItem = ({ item }) => {
    return (
      <Button
        containerStyle={CountryListStyles.listButtonContainer}
        buttonStyle={
          checkedRef.current.includes(item.name)
            ? CountryListStyles.listButtonChecked
            : CountryListStyles.listButtonUnchecked
        }
        titleStyle={
          checkedRef.current.includes(item.name)
            ? CountryListStyles.listButtonTitleChecked
            : CountryListStyles.listButtonTitleUnchecked
        }
        title={item.name}
        type='outline'
        onPress={() => onPressSetChecked(item.name)}
      />
    );
  };

  return (
    <SafeAreaView style={CountryListStyles.safeViewContainer}>
      <StatusBar barStyle='light-content' />
      <View style={CountryListStyles.container}>
        <FlatList
          data={selectedData}
          keyExtractor={keyExtractor}
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={100}
          initialNumToRender={10}
          windowSize={5}
          renderItem={renderItem}
          ListHeaderComponent={
            <View>
              <Header />
              <Picker
                selectedValue={selectedContinent}
                style={CountryListStyles.picker}
                itemStyle={CountryListStyles.pickerItem}
                onValueChange={(itemValue, itemIndex) =>
                  displaySelectedData(itemValue)
                }
              >
                <Picker.Item label='All' value='All' />
                <Picker.Item label='Africa' value='Africa' />
                <Picker.Item label='Antarctica' value='Antarctica' />
                <Picker.Item label='Asia' value='Asia' />
                <Picker.Item label='Europe' value='Europe' />
                <Picker.Item label='North America' value='North America' />
                <Picker.Item label='Oceania' value='Oceania' />
                <Picker.Item label='South America' value='South America' />
              </Picker>
              <View>
                <Text style={CountryListStyles.pickerSubText}>
                  scroll to view by continent
                </Text>
                <View style={CountryListStyles.deleteButtonContainer}>
                  <TouchableOpacity onPress={() => onPressResetCheckedData()}>
                    <View style={CountryListStyles.deleteButton}>
                      <FontAwesome
                        name='trash-o'
                        size={16}
                        style={CountryListStyles.deleteIcon}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
          ListFooterComponent={<Footer />}
        />
      </View>
    </SafeAreaView>
  );
};
