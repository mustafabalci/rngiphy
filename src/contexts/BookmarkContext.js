import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, Text } from 'react-native';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState();

  useEffect(() => {
    getBookmarks();
  }, []);

  const addBookmark = async gif => {
    try {
      const bookmarksString = await AsyncStorage.getItem('@bookmarks');
      let bookmarksArray = JSON.parse(bookmarksString);
      if (bookmarksArray !== null) {
        bookmarksArray.push(gif);
        setBookmarks(bookmarksArray);
        await AsyncStorage.setItem(
          '@bookmarks',
          JSON.stringify(bookmarksArray),
        );
        console.log(bookmarks);
      } else {
        await AsyncStorage.setItem('@bookmarks', JSON.stringify([gif]));
        setBookmarks([gif]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeBookmark = async gifId => {
    const bookmarksString = await AsyncStorage.getItem('@bookmarks');
    const bookmarksArray = await JSON.parse(bookmarksString);
    const filteredArray = await bookmarksArray.filter(
      bookmark => bookmark.id !== gifId,
    );
    setBookmarks(filteredArray);
    await AsyncStorage.setItem('@bookmarks', JSON.stringify(filteredArray));
  };

  const getBookmarks = async () => {
    const allBookmarksRes = await AsyncStorage.getItem('@bookmarks');
    const allBookmarks = await JSON.parse(allBookmarksRes);
    setBookmarks(allBookmarks);
    return allBookmarks;
  };

  const bookmarked = gifID => {
    if (bookmarks) {
      return !!bookmarks.some(gif => gif.id === gifID);
    } else {
      return false;
    }
  };

  return (
    <BookmarkContext.Provider
      value={{ addBookmark, removeBookmark, bookmarked, bookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};
