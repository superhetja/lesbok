import React from 'react';
import ProfileScreenNavigationProp,{ NavigationContainer, useNavigation } from '@react-navigation/native';
import ListScreen from '../screens/ListScreen/listScreen';
import DashboardScreen from '../screens/DashboardScreen/dashboardScreen';
import LoginScreen from '../screens/LoginScreen/loginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/Navigations/bottomNavigation';
import Notification from '../screens/Notification/notification';
import SetNotifications from '../components/Notifications/Notifications';
import { Button } from '@ui-kitten/components';




const { Navigator, Screen } = createBottomTabNavigator();


const HomeNavigator = () => (
	// const navigation: <ProfileScreenNavigationProp>;
		// const navigation = useNavigation()
			<Navigator tabBar={props => <BottomNavigation {...props} />}>
			<Screen name='Mælaborð' component={DashboardScreen} />
    <Screen
			name='Seinustu færslur'
			component={ListScreen}
			options={{
				headerRight: () => <Button onPress={useNavigation()}>Click me</Button>
			}}/>
		<Screen name='Stillingar' component={SetNotifications} />
  </Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
