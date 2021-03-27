import React from 'react';
import { View, StyleSheet } from 'react-native';
import { windowWidth } from '../../utilities/Utilities';

const ColorBox = ({ bgColor }) => {
  return <View style={[styles.colorBox, { backgroundColor: bgColor }]}></View>;
};

const styles = StyleSheet.create({
  colorBox: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    margin: 10,
  },
});

export default ColorBox;
