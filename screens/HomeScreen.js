import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ImageCard from '../components/ImageCard';
import { fetchImages } from '../database/db';

export default function HomeScreen() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ImageCard image={item} />}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  list: {
    justifyContent: 'space-between',
  },
});
