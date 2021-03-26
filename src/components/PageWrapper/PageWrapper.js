import React from 'react';
import { View, StyleSheet } from 'react-native';

const PageWrapper = ({ children }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: '#2C3136',
    flex: 1,
  },
});

export default PageWrapper;
