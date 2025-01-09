import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by date..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={onSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
});
