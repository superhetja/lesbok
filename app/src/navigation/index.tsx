import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from '../screens/ListScreen/listScreen';
import DashboardScreen from '../screens/DashboardScreen/dashboardScreen';
import LoginScreen from '../screens/LoginScreen/loginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/Navigations/bottomNavigation';
import Notification from '../screens/Notification/notification';
import SetNotifications from '../components/Notifications/Notifications';



const { Navigator, Screen } = createBottomTabNavigator();

const HomeNavigator = () => (
  <Navigator tabBar={props => <BottomNavigation {...props} />}>
		<Screen name='Mælaborð' component={DashboardScreen} />
    <Screen name='Seinustu færslur' component={ListScreen}/>
		<Screen name='Innskráning' component={SetNotifications} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
