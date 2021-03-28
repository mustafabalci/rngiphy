import React, { useEffect, useContext } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  RefreshControl,
  TextInput,
  StyleSheet,
} from 'react-native';
import { DataContext } from '../contexts/DataContext';
import { PageWrapper } from '../components';

const TrendingScreen = () => {
  const {
    getTrendingGifs,
    trendingGifs,
    fetching,
    handleLoadMore,
  } = useContext(DataContext);

  useEffect(() => {
    if (trendingGifs.length < 1) {
      getTrendingGifs();
    }
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.gifImageWrapper}>
      <Image
        source={{ uri: item.images.fixed_height.url }}
        style={styles.gifImage}
      />
    </View>
  );

  return (
    <PageWrapper>
      <View>
        <TextInput
          numberOfLines={1}
          placeholder="Gif Ara..."
          placeholderTextColor="#FFFFFF"
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.heading}>Trending gifs</Text>
      </View>
      <FlatList
        data={trendingGifs}
        renderItem={renderItem}
        keyExtractor={gif => gif.id}
        numColumns={3}
        refreshControl={
          <RefreshControl refreshing={fetching} onRefresh={getTrendingGifs} />
        }
        onEndReachedThreshold={0.01}
        onEndReached={handleLoadMore}
        style={styles.flatList}
      />
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#828282',
    borderRadius: 32,
    color: '#FFFFFF',
  },
  heading: {
    marginVertical: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
    fontSize: 18,
  },
  flatList: {
    marginHorizontal: -8,
  },
  gifImage: {
    width: '100%',
    height: 200,
  },
  gifImageWrapper: { flex: 1 / 3, padding: 8 },
});

export default TrendingScreen;
