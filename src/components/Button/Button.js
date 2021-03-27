import React, { useState } from 'react';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from 'react-native';

const Button = ({ text, ...rest }) => {
  const renderButton = () =>
    Platform.OS === 'android' ? (
      <View style={{ borderRadius: 100, backgroundColor: 'transparent' }}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#DDD', true)}
          {...rest}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    ) : (
      <TouchableHighlight style={styles.button} {...rest}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableHighlight>
    );

  return renderButton();
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 18,
    backgroundColor: '#2F80ED',
    borderRadius: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Button;
