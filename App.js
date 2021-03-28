import 'react-native-gesture-handler';
import React from 'react';
import { Stack } from '@navigation';
import DataProvider from './src/contexts/DataContext';
import { UtilsProvider } from './src/contexts/UtilsContext';

const App = () => {
  return (
    <UtilsProvider>
      <DataProvider>
        <Stack />
      </DataProvider>
    </UtilsProvider>
  );
};

export default App;
