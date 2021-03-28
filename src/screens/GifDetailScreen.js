import React, { useContext, useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, Pressable } from 'react-native';

import { Button, Heading, PageWrapper } from '../components';
import { BookmarkContext } from '../contexts/BookmarkContext';

const GifDetailScreen = ({ route, navigation }) => {
  const [isBookmark, setIsBookmark] = useState();

  const { gif } = route.params;

  const { addBookmark, removeBookmark, bookmarked, bookmarks } = useContext(
    BookmarkContext,
  );

  useEffect(() => {
    setIsBookmark(bookmarked(gif.id));
    console.log(bookmarked(gif.id));
  }, [bookmarked]);

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
      {!isBookmark ? (
        <Button text="Favorilere Ekle" onPress={() => addBookmark(gif)} />
      ) : (
        <Button
          text="Favorilerden Kaldır"
          onPress={() => removeBookmark(gif.id)}
        />
      )}
      <Pressable onPress={() => navigation.navigate('Bookmarks')}>
        <Text style={styles.navText}>Favorilere Git</Text>
      </Pressable>
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
  navText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 36,
  },
});

export default GifDetailScreen;
