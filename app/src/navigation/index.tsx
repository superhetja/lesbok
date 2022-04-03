import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from '../screens/ListScreen/listScreen';
import DashboardScreen from '../screens/DashboardScreen/dashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/Navigations/bottomNavigation';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeNavigator = () => (
  <Navigator tabBar={props => <BottomNavigation {...props} />}>
		<Screen name='Mælaborð' component={DashboardScreen} />
    <Screen name='Seinustu færslur' component={ListScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
