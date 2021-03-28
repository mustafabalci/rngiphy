import React from 'react';
import { Image, StyleSheet, View, Pressable } from 'react-native';

const ListItem = ({ navigation, gif }) => {
  return (
    <View style={styles.gifImageWrapper}>
      <Pressable
        onPress={() =>
          navigation.navigate('Details', { screen: 'Gif', params: { gif } })
        }>
        <Image
          source={{ uri: gif.images.fixed_height.url }}
          style={styles.gifImage}
        />
      </Pressable>
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
