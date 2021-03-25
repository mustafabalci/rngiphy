import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SearchingScreen, TrendingScreen } from '@screens';

const MainStack = createStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Trending" component={SearchingScreen} />
        <MainStack.Screen name="Searching" component={TrendingScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
