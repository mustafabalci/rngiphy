import 'react-native-gesture-handler';
import React from 'react';
import { Stack } from '@navigation';
import DataProvider from './src/contexts/DataContext';

const App = () => {
  return (
    <DataProvider>
      <Stack />
    </DataProvider>
  );
};

export default App;
