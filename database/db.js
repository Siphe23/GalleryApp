import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'GalleryDB', location: 'default' });

export const fetchImages = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM images',
      [],
      (_, { rows }) => callback(rows._array),
      (_, error) => console.error('Error fetching images:', error)
    );
  });
};

export const searchImages = (criteria, value, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM images WHERE ${criteria} LIKE ?`,
      [`%${value}%`],
      (_, { rows }) => callback(rows._array),
      (_, error) => console.error('Error searching images:', error)
    );
  });
};
