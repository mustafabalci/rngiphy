import React, { createContext, useState, useContext } from 'react';
import { UtilsContext } from './UtilsContext';

export const DataContext = createContext();

const API_BASE_URL = 'https://api.giphy.com/v1';
const API_KEY = 'FyASw4VG1p7l384WBhLUSuSPopB9yEbn';

export const DataProvider = ({ children }) => {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [trendingDataOffset, setTrendingDataOffset] = useState(0);

  const [fetching, setFetching] = useState(false);

  const [searchingGifs, setSearchingGifs] = useState([]);
  const [searchingDataOffset, setSearchingDataOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState(null);

  const { openModal } = useContext(UtilsContext);

  const getTrendingGifs = async () => {
    setFetching(true);
    try {
      const trendingGifResponse = await fetch(
        `${API_BASE_URL}/gifs/trending?api_key=${API_KEY}&limit=20`,
      );
      const trendingGifData = await trendingGifResponse.json();
      setTrendingGifs(trendingGifData.data);
      setTrendingDataOffset(0);
      setFetching(false);
    } catch (e) {
      setFetching(false);
      openModal('Gifler yüklenirken bir problem meydana geldi');
    }
  };

  const handleLoadMore = async () => {
    const offsetNumber = trendingDataOffset + 20;
    try {
      const moreTrendingGifResponse = await fetch(
        `${API_BASE_URL}/gifs/trending?api_key=${API_KEY}&limit=20&offset=${offsetNumber}`,
      );
      const moreTrendingGifData = await moreTrendingGifResponse.json();
      setTrendingGifs(trendingGifs.concat(moreTrendingGifData.data));
      setTrendingDataOffset(offsetNumber);
    } catch (e) {
      openModal('Yeni gifler yüklenirken bir problem meydana geldi');
    }
  };

  const getSearchingGifs = async () => {
    setFetching(true);
    try {
      const searchingGifResponse = await fetch(
        `${API_BASE_URL}/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=20`,
      );
      const searchingGifData = await searchingGifResponse.json();
      setSearchingGifs(searchingGifData.data);
      setFetching(false);
    } catch (e) {
      setFetching(false);
      openModal('Gifler yüklenirken bir problem meydana geldi');
    }
  };

  const handleLoadMoreSearching = async () => {
    const offsetNumber = searchingDataOffset + 20;
    try {
      const moreSearchingGifResponse = await fetch(
        `${API_BASE_URL}/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=20&offset=${offsetNumber}`,
      );
      const moreSearchingGifData = await moreSearchingGifResponse.json();
      setSearchingGifs(searchingGifs.concat(moreSearchingGifData.data));
      setSearchingDataOffset(offsetNumber);
    } catch (e) {
      openModal('Yeni gifler yüklenirken bir problem meydana geldi');
    }
  };

  return (
    <DataContext.Provider
      value={{
        trendingGifs,
        getTrendingGifs,
        fetching,
        handleLoadMore,
        searchingGifs,
        getSearchingGifs,
        setSearchingGifs,
        handleLoadMoreSearching,
        searchTerm,
        setSearchTerm,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
