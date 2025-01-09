import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function ImageCard({ image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image.path }} style={styles.image} />
      <Text style={styles.timestamp}>{image.timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    height: 150,
    width: '100%',
  },
  timestamp: {
    textAlign: 'center',
    padding: 5,
    color: '#333',
  },
});
