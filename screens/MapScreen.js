import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { fetchImages } from '../database/db';

export default function MapScreen() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {images.map((image) => (
          <Marker
            key={image.id}
            coordinate={{
              latitude: image.latitude,
              longitude: image.longitude,
            }}
            title="Photo Location"
            description={image.timestamp}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
