import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import { Heading, PageWrapper } from '../components';

const GifDetailScreen = ({ route }) => {
  const { gif } = route.params;

  return (
    <PageWrapper>
      <Heading text={gif.title} />
      <Image
        source={{ uri: gif.images.fixed_height.url }}
        style={styles.gifImage}
      />
      <View>
        <Text style={styles.info}>Yükleyen Kullanıcı: {gif.username}</Text>
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  gifImage: {
    width: '100%',
    height: 250,
  },
  info: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 16,
  },
});

export default GifDetailScreen;
