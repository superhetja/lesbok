import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../screens';
import {
	selectCurrentRole,
	selectCurrentUser,
	selectUserChildren,
} from '../slices/authSlice';
import BottomNavigation from '../components/Navigations/bottomNavigation';
import DashboardScreen from '../screens/DashboardScreen/dashboardScreen';
import ListScreen from '../screens/ListScreen/listScreen';
import { HomeTabParamList, RootStackParamList } from './types';
import { Roles } from '../utils/types';
import GuardianStack from './guardianStack';
import TeacherStack from './teacherStack';

const { Navigator, Screen } = createBottomTabNavigator<HomeTabParamList>();

function HomeNavigator() {
	const child = useSelector(selectUserChildren);
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
				options={({ route }) => ({
					// title: route.params.name
				})}
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

const MainStack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
	const user = useSelector(selectCurrentUser);
	const role = useSelector(selectCurrentRole);

	return (
		<NavigationContainer>
			<MainStack.Navigator screenOptions={{ headerShown: false }}>
				{user && role === Roles.GUARDIAN ? (
					<>
						<MainStack.Screen name="Guardian" component={GuardianStack} />
						{/* <MainStack.Screen name='EntryForm' component={EntryFormScreen} options={{presentation: 'containedModal',}}/> */}
					</>
				) : role === Roles.TEACHER ? (
					<MainStack.Screen name="Teacher" component={TeacherStack} />
				) : (
					<MainStack.Screen
						name="SignIn"
						component={LoginScreen}
						options={{
							title: 'Innskráning',
						}}
					/>
				)}
			</MainStack.Navigator>
		</NavigationContainer>
	);
}

export {
	RootStackParamList,
	RootStackScreenProps,
	HomeTabParamList,
	HomeTabScreenProps,
} from './types';
