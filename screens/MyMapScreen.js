import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { MapView } from 'expo';

// JSON DATA
const countryData = require('./../data/countries.json');

export default class MyMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLat: 38,
      currentLng: -97,
      markers: [],
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', () => {
      AsyncStorage.getItem('Visited', (err,result) => {
        const visitedData = JSON.parse(result);
        const {checked} = this.state;
        let list = [];
        if (visitedData !== null) {
          for (x = 0; x < visitedData.checked.length; x++) {
            for (i = 0; i < countryData.length; i++) {
              if (visitedData.checked[x] === countryData[i].name) {
                // console.log(countryData[i].latlng);
                list.push(countryData[i].latlng);
                // console.log(list);
              }
            }
          }
        }
        let newList = list.map((val,i) => {
          return {
            coords: {latitude:Number(val[0]),longitude:Number(val[1])},
          }
        });
        this.setState({
          markers: newList,
        });
      });
    });
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: this.state.currentLat,
          longitude: this.state.currentLng,
          latitudeDelta: 150,
          longitudeDelta: 150,
        }}
      >
        {this.state.markers.map((marker,index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.coords}
          />
        ))}
      </MapView>
    );
  }
}
