import React, { useEffect, useContext } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';

import { DataContext } from '../contexts/DataContext';
import { Heading, PageWrapper, SearchInput, ListItem } from '../components';

const TrendingScreen = ({ navigation }) => {
  const {
    getTrendingGifs,
    trendingGifs,
    fetching,
    handleLoadMore,
    setSearchTerm,
  } = useContext(DataContext);

  useEffect(() => {
    if (trendingGifs.length < 1) {
      getTrendingGifs();
    }
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSearchTerm(null);
    });

    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => (
    <ListItem sourceUri={item.images.fixed_height.url} />
  );

  return (
    <PageWrapper>
      <SearchInput
        navigation={navigation}
        onSubmit={() => navigation.navigate('Searching')}
      />
      <Heading text="Trending gifs" />
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
  flatList: {
    marginHorizontal: -8,
  },
});

export default TrendingScreen;
