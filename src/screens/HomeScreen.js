import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button, ColorBox, PageWrapper } from '../components';
import { windowWidth } from '../utilities/Utilities';

const HomeScreen = ({ navigation }) => {
  return (
    <PageWrapper>
      <View style={styles.header}>
        <Text style={styles.headerText}>Gif Dünyası</Text>
      </View>
      <View>
        <View
          style={{ flexDirection: 'row', marginHorizontal: -windowWidth / 3 }}>
          <ColorBox bgColor="#219653" />
          <ColorBox bgColor="#F2C94C" />
          <ColorBox bgColor="#56CCF2" />
          <ColorBox bgColor="#9B51E0" />
        </View>
        <View
          style={{ flexDirection: 'row', marginHorizontal: -windowWidth / 6 }}>
          <ColorBox bgColor="#2D9CDB" />
          <ColorBox bgColor="#F2994A" />
          <ColorBox bgColor="#EB5757" />
        </View>
        <View
          style={{ flexDirection: 'row', marginHorizontal: -windowWidth / 3 }}>
          <ColorBox bgColor="#56CCF2" />
          <ColorBox bgColor="#888888" />
          <ColorBox bgColor="#9B51E0" />
          <ColorBox bgColor="#219653" />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          text="Gifleri Gör"
          onPress={() => navigation.navigate('Trending')}
        />
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 24,
  },
  headerText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
    color: '#FFFFFF',
    fontSize: 36,
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    zIndex: 222,
  },
});

export default HomeScreen;
