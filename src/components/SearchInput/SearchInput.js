import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, Pressable, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DataContext } from '../../contexts/DataContext';

const SearchInput = ({ onSubmit }) => {
  const [focused, setFocused] = useState(false);

  const { searchTerm, setSearchTerm } = useContext(DataContext);

  const onClose = () => {
    setFocused(false);
    setSearchTerm(null);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.wrapper}>
      {focused && (
        <Pressable onPress={onClose}>
          <Icon name="close" size={42} color="#FFFFFF" />
        </Pressable>
      )}
      <TextInput
        numberOfLines={1}
        placeholder="Gif Ara..."
        placeholderTextColor="#FFFFFF"
        style={styles.input}
        value={searchTerm}
        onChangeText={setSearchTerm}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onSubmitEditing={onSubmit}
      />
      {focused && (
        <Pressable onPress={onSubmit}>
          <Icon name="magnify" size={42} color="#FFFFFF" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#828282',
    borderRadius: 32,
    color: '#FFFFFF',
    flex: 3,
    fontSize: 18,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SearchInput;
