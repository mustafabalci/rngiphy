import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BookmarksScreen, GifDetailScreen } from '../screens';

const Details = createStackNavigator();

const stackOptions = {
  headerShown: false,
};

const DetailStack = () => {
  return (
    <Details.Navigator>
      <Details.Screen
        name="Gif"
        component={GifDetailScreen}
        options={stackOptions}
      />
      <Details.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={stackOptions}
      />
    </Details.Navigator>
  );
};

export default DetailStack;
