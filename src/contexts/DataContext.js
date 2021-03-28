import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const API_BASE_URL = 'https://api.giphy.com/v1';
const API_KEY = 'FyASw4VG1p7l384WBhLUSuSPopB9yEbn';

export const DataProvider = ({ children }) => {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [trendingDataOffset, setTrendingDataOffset] = useState(0);

  const [fetching, setFetching] = useState(false);

  const [searchingGifs, setSearchingGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);

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
      console.log(e);
    }
  };

  const handleLoadMore = async () => {
    const offsetNumber = trendingDataOffset + 20;
    try {
      const moreTrendingGifResponse = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20&offset=${offsetNumber}`,
      );
      const moreTrendingGifData = await moreTrendingGifResponse.json();
      setTrendingGifs(trendingGifs.concat(moreTrendingGifData.data));
      setTrendingDataOffset(offsetNumber);
    } catch (e) {
      console.log(e);
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
      console.log(e);
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
        searchTerm,
        setSearchTerm,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
