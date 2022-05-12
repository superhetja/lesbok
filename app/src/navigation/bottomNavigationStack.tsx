import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/Navigations/bottomNavigation';
import { DashboardScreen, ListScreen } from '../screens';
import { HomeTabParamList } from './types';

const { Navigator, Screen } = createBottomTabNavigator<HomeTabParamList>();

function BottomNavigationStack() {
	// route.params.params.name = child[0].name;

	return (
		<Navigator
			tabBar={props => <BottomNavigation {...props} />}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen
				name="Dashboard"
				component={DashboardScreen}
				options={({ route }) => ({})}
				initialParams={{ studentId: 'any' }}
			/>
			<Screen
				name="EntryList"
				component={ListScreen}
				options={{
					title: 'Færslur',
				}}
			/>
		</Navigator>
	);
}

export default BottomNavigationStack;
