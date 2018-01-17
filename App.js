import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

const countryData = require('./data/countries.json')

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: countryData,
    }
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 150,
          longitudeDelta: 150,
        }}
      >
        {this.state.markers.map(marker => (
          <MapView.Marker
            key={marker.name.common}
            coordinate={{ latitude:marker.latlng[0],longitude:marker.latlng[1] }}
            title={marker.name.common}
          />
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
