import React, { useState, useRef, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

// JSON DATA
const countryData = require('./../data/countries.json');

export default MyMapScreen = ({ navigation }) => {
  const [currentLat, setCurrentLat] = useState(38);
  const [currentLng, setCurrentLng] = useState(-97);
  const [markers, _setMarkers] = useState([]);
  const markersRef = useRef(markers);
  const setMarkers = (newMarkers) => {
    markersRef.current = newMarkers;
    _setMarkers(newMarkers);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      AsyncStorage.getItem('Visited', (err, result) => {
        const visitedData = JSON.parse(result);
        let list = [];
        if (visitedData && visitedData.checked !== null) {
          for (x = 0; x < visitedData.checked.length; x++) {
            for (i = 0; i < countryData.length; i++) {
              if (visitedData.checked[x] === countryData[i].name) {
                list.push(countryData[i].latlng);
              }
            }
          }
        }
        let newList = list.map((val, i) => {
          return {
            coords: { latitude: Number(val[0]), longitude: Number(val[1]) },
          };
        });
        setMarkers(newList);
      });
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
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
