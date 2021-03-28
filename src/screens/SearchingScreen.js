import React, { useContext, useEffect } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';

import { Heading, PageWrapper, SearchInput, ListItem } from '../components';
import { DataContext } from '../contexts/DataContext';

const SearchingScreen = ({ navigation }) => {
  const {
    getSearchingGifs,
    searchingGifs,
    fetching,
    setSearchingGifs,
    handleLoadMoreSearching,
  } = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getSearchingGifs();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setSearchingGifs([]);
    });

    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => (
    <ListItem sourceUri={item.images.fixed_height.url} />
  );

  return (
    <PageWrapper>
      <SearchInput onSubmit={() => getSearchingGifs()} />
      <Heading text="Results" />
      <FlatList
        data={searchingGifs}
        renderItem={renderItem}
        keyExtractor={gif => gif.id}
        numColumns={3}
        refreshControl={
          <RefreshControl refreshing={fetching} onRefresh={getSearchingGifs} />
        }
        onEndReachedThreshold={0.01}
        onEndReached={handleLoadMoreSearching}
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

export default SearchingScreen;
