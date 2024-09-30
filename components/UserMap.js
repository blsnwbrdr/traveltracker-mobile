import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';

// STYLES
import UserMapStyles from './../styles/UserMapStyles';

// JSON DATA
const countryData = require('./../data/countries.json');

export default UserMap = (props) => {
  const [currentLat, setCurrentLat] = useState(38);
  const [currentLng, setCurrentLng] = useState(-97);
  const [markers, _setMarkers] = useState([]);
  const markersRef = useRef(markers);
  const setMarkers = (newMarkers) => {
    markersRef.current = newMarkers;
    _setMarkers(newMarkers);
  };

  // GET USER LIST OF CHECKED COUNTRIES
  useEffect(() => {
    let list = [];
    for (x = 0; x < props.searchResultList.length; x++) {
      for (i = 0; i < countryData.length; i++) {
        if (props.searchResultList[x] === countryData[i].name) {
          list.push(countryData[i].latlng);
        }
      }
    }
    let newList = list.map((val, i) => {
      return {
        coords: { latitude: Number(val[0]), longitude: Number(val[1]) },
      };
    });
    setMarkers(newList);
  }, []);

  return (
    <View style={UserMapStyles.container}>
      <View style={UserMapStyles.backContainer}>
        <TouchableOpacity onPress={() => props.onPressBackToSearch()}>
          <View style={UserMapStyles.backButton}>
            <FontAwesome
              name='arrow-left'
              size={16}
              style={UserMapStyles.backIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={UserMapStyles.header}>User Map</Text>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLat,
          longitude: currentLng,
          latitudeDelta: 150,
          longitudeDelta: 150,
        }}
      >
        {markersRef.current.map((marker, index) => (
          <Marker key={index} coordinate={marker.coords} />
        ))}
      </MapView>
    </View>
  );
};
