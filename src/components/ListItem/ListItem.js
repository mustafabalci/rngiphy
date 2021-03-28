import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ListItem = ({ sourceUri }) => {
  return (
    <View style={styles.gifImageWrapper}>
      <Image source={{ uri: sourceUri }} style={styles.gifImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  gifImage: {
    width: '100%',
    height: 200,
  },
  gifImageWrapper: { flex: 1 / 3, padding: 8 },
});

export default ListItem;
