import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Heading = ({ text }) => {
  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginVertical: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default Heading;
