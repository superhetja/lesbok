import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen/listScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
  <Navigator>
    <Screen name='Seinustu færslur' component={ListScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
