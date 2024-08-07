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
import { CheckBox } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';

// COMPONENTS
import Header from './../components/Header';
import Footer from './../components/Footer';

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
  displaySelectedData = (continent) => {
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
  saveChecked = (data) => {
    AsyncStorage.setItem('Visited', JSON.stringify({ checked: data }));
  };

  // SET COUNTRY AS CHECKED WHEN PRESSED
  onPressSetChecked = (name) => {
    if (!checkedRef.current.includes(name)) {
      setChecked([...checkedRef.current, name]);
      this.saveChecked(checkedRef.current);
    } else {
      setChecked(checkedRef.current.filter((a) => a !== name));
      this.saveChecked(checkedRef.current);
    }
  };

  // RESET CHECKED DATA
  onPressResetCheckedData = () => {
    Alert.alert(
      'Reset Checked Data',
      'Are you sure? This will clear ALL checked countries/territories.',
      [
        { text: 'Cancel' },
        {
          text: 'Yes',
          onPress: () => {
            setChecked([]);
            this.saveChecked(null);
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={CountryListStyles.safeViewContainer}>
      <StatusBar barStyle='light-content' />
      <View style={CountryListStyles.container}>
        <FlatList
          data={selectedData}
          keyExtractor={(x, i) => i.toString()}
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={100}
          initialNumToRender={10}
          windowSize={20}
          renderItem={({ item }) => (
            <CheckBox
              containerStyle={CountryListStyles.listButton}
              textStyle={CountryListStyles.listButtonText}
              center
              iconRight
              uncheckedIcon='square-o'
              uncheckedColor='#6BB7C1'
              checkedIcon='check-square-o'
              checkedColor='#6BB7C1'
              title={item.name}
              onPress={() => this.onPressSetChecked(item.name)}
              checked={checkedRef.current.includes(item.name)}
            />
          )}
          ListHeaderComponent={
            <View>
              <Header />
              <Picker
                selectedValue={selectedContinent}
                style={CountryListStyles.picker}
                itemStyle={CountryListStyles.pickerItem}
                onValueChange={(itemValue, itemIndex) =>
                  this.displaySelectedData(itemValue)
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
                  <TouchableOpacity
                    onPress={() => this.onPressResetCheckedData()}
                  >
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
