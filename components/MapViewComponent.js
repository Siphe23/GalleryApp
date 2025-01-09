import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapViewComponent from './MapViewComponent';

const locations = [
  {
    latitude: -25.746111,
    longitude: 28.188056,
    title: 'Pretoria',
    description: 'Capital city of South Africa',
  },
  {
    latitude: -26.204444,
    longitude: 28.045556,
    title: 'Johannesburg',
    description: 'Largest city in South Africa',
  },
];

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapViewComponent locations={locations} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
