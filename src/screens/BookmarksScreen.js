import React, { useContext } from 'react';
import { Heading, PageWrapper } from '../components';
import { FlatList, Image, StyleSheet, Text } from 'react-native';
import { BookmarkContext } from '../contexts/BookmarkContext';

const BookmarksScreen = () => {
  const { bookmarks } = useContext(BookmarkContext);

  const renderItem = ({ item }) => (
    <Image
      source={{ uri: item.images.fixed_height.url }}
      style={styles.image}
    />
  );

  return (
    <PageWrapper>
      <Heading text="Favorilerim" />
      {bookmarks && (
        <FlatList
          data={bookmarks}
          renderItem={renderItem}
          keyExtractor={gif => gif.id}
        />
      )}
      {!bookmarks && <Text>Favorilerinizde gif bulunmamaktadır.</Text>}
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    marginVertical: 16,
  },
});

export default BookmarksScreen;
