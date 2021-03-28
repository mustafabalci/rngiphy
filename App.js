import 'react-native-gesture-handler';
import React from 'react';
import { Stack } from '@navigation';
import DataProvider from './src/contexts/DataContext';
import { UtilsProvider } from './src/contexts/UtilsContext';
import { BookmarkProvider } from './src/contexts/BookmarkContext';

const App = () => {
  return (
    <BookmarkProvider>
      <UtilsProvider>
        <DataProvider>
          <Stack />
        </DataProvider>
      </UtilsProvider>
    </BookmarkProvider>
  );
};

export default App;
