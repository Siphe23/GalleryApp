import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';
import { searchImages } from '../database/db';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    searchImages('timestamp', query, setResults);
  };

  return (
    <View style={styles.container}>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ImageCard image={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});
