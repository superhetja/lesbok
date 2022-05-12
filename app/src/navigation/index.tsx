import React, { useState } from 'react';
import ListScreen from '../screens/ListScreen/listScreen';
import DashboardScreen from '../screens/DashboardScreen/dashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/Navigations/bottomNavigation';
import { Button, IndexPath, Layout, MenuItem, OverflowMenu } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { selectCurrentRole, selectCurrentUser, selectUserChildren, selectUserGroups, setCredentials } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { NotificationScreen, InformationScreen, EntryFormScreen, SelectGroupScreen, LoginScreen, GroupScreen, DetailedEntryScreen, NotificationFormScreen} from '../screens/';
import { Settings } from 'react-native-feather';
import { HomeTabParamList, RootStackParamList } from './types';
import { Roles } from '../utils/types';
import GuardianStack from './guardianStack';
import TeacherStack from './teacherStack';



const { Navigator, Screen } = createBottomTabNavigator<HomeTabParamList>();





const HomeNavigator = () => {
	const child = useSelector(selectUserChildren);
	// route.params.params.name = child[0].name;

	return(
		<Navigator
			tabBar={props => <BottomNavigation {...props} />}
			screenOptions={{
				headerShown: false
			}}
		>
			<Screen
				name='Dashboard'
				component={DashboardScreen}
				options={({route}) => ({
					// title: route.params.name
				})}
				initialParams={{studentId: 'any'}}
			/>
			<Screen
				name='EntryList'
				component={ListScreen}
				options= {{
					title: 'Færslur'
				}}
			/>
  	</Navigator>
	)
}

const MainStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
	const user = useSelector(selectCurrentUser)
	const role = useSelector(selectCurrentRole);

	return (
		<NavigationContainer>
			<MainStack.Navigator screenOptions={{headerShown: false}}>
				{user && role === Roles.GUARDIAN ?
				<>
						<MainStack.Screen
							name='Guardian'
							component={GuardianStack}
						/>
						{/* <MainStack.Screen name='EntryForm' component={EntryFormScreen} options={{presentation: 'containedModal',}}/> */}
				</>

				: role === Roles.TEACHER ?
						<MainStack.Screen
							name='Teacher'
							component={TeacherStack}
						/>
				:
				<>
					<MainStack.Screen
						name="SignIn"
						component={LoginScreen}

						options={{
							title: 'Innskráning'
						}}
						/>

					</>
				}
			</MainStack.Navigator>
		</NavigationContainer>
	) ;
};

export { RootStackParamList, RootStackScreenProps, HomeTabParamList, HomeTabScreenProps} from './types'
