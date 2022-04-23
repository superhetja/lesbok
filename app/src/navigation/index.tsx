import React, { useState } from 'react';
import ProfileScreenNavigationProp,{ NavigationContainer, StackRouter, useNavigation } from '@react-navigation/native';
import ListScreen from '../screens/ListScreen/listScreen';
import DashboardScreen from '../screens/DashboardScreen/dashboardScreen';
import LoginScreen from '../screens/LoginScreen/loginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/Navigations/bottomNavigation';
import Notification from '../screens/Notification/notification';
import SetNotifications from '../components/Notifications/Notifications';
import { Button, useStyleSheet } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { selectCurrentUser } from '../slices/authSlice';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator()


const { Navigator, Screen } = createBottomTabNavigator();

const LoginNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="SignIn"
			component={LoginScreen}
			options={{
				title: 'Innskráning'
			}} />
	</Stack.Navigator>
)

const HomeNavigator = () => (
	// const navigation: <ProfileScreenNavigationProp>;
		// const navigation = useNavigation()
		<Navigator tabBar={props => <BottomNavigation {...props} />}>
			<Screen name='Mælaborð' component={DashboardScreen} />
			<Screen
				name='Seinustu færslur'
				component={ListScreen}
				options={({route, navigation}) => ({
					headerRight: () => <Button onPress={() => navigation.navigate('Stillingar')}>Click me</Button>
				})}/>
			<Screen name='Stillingar' component={SetNotifications} />
  </Navigator>
);

export const AppNavigator = () => {
	const user = useSelector(selectCurrentUser)

	console.log(user)
	return (
		<NavigationContainer>
			{
				user
				? <HomeNavigator/>
				: <LoginNavigator />
			}
		</NavigationContainer>
	) ;
};
