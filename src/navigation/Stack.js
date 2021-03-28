import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, SearchingScreen, TrendingScreen } from '@screens';

const MainStack = createStackNavigator();

const stackOptions = {
  headerShown: false,
};

const Stack = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={stackOptions}
        />
        <MainStack.Screen
          name="Trending"
          component={TrendingScreen}
          options={stackOptions}
        />
        <MainStack.Screen
          name="Searching"
          component={SearchingScreen}
          options={stackOptions}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
