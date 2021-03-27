import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const API_KEY = 'FyASw4VG1p7l384WBhLUSuSPopB9yEbn';

export const DataProvider = ({ children }) => {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [trendingDataOffset, setTrendingDataOffset] = useState(0);

  const getTrendingGifs = async () => {
    setFetching(true);
    try {
      const trendingGifResponse = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`,
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
      setFetching(false);
      console.log(e);
    }
  };

  return (
    <DataContext.Provider
      value={{ trendingGifs, getTrendingGifs, fetching, handleLoadMore }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
