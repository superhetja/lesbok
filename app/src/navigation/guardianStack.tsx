import React from 'react';
import {
	RouteProp,
	useNavigation,
	getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuItem } from '@ui-kitten/components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { SettingsMenu, SwitchChildMenu } from '../components/Navigations';
import BottomNavigationStack from './bottomNavigationStack';
import SettingsStack from './settingsStack';
import { GuardianStackParamList } from './types';
import { DetailedEntryScreen, EntryFormScreen } from '../screens';
import { selectCurrentUser } from '../slices/authSlice';

export function getHeaderTitle(
	route: RouteProp<GuardianStackParamList, 'Home' | 'Settings'>,
) {
	// If the focused route is not found, we need to assume it's the initial screen
	// This can happen during if there hasn't been any navigation inside the screen
	// In our case, it's "Feed" as that's the first screen inside the navigator
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

	switch (routeName) {
		case 'Home':
			return '';
		case 'EntryList':
			return 'Færslur';
		case 'Dashboard':
			return '';
		case 'Notification' || 'NotificationForm':
			return 'Áminningar';
		default:
			console.log('routeName', routeName);
			return '';
	}
}

const Stack = createNativeStackNavigator<GuardianStackParamList>();

function GuardianStack() {
	const navigation = useNavigation();
	const user = useSelector(selectCurrentUser);

	const renderSettningsMenu = () => {
		return (
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<SettingsMenu>
					<MenuItem
						title="Upplýsingar"
						onPress={() =>
							navigation.navigate('Guardian', {
								screen: 'Settings',
								params: { screen: 'Information' },
							})
						}
					/>
					<MenuItem
						title="Stilla áminningar"
						onPress={() =>
							navigation.navigate('Guardian', {
								screen: 'Settings',
								params: {
									screen: 'Notification',
								},
							})
						}
					/>
				</SettingsMenu>
				{user && <SwitchChildMenu profiles={user.children} />}
			</View>
		);
	};

	return (
		<Stack.Navigator
			screenOptions={{
				headerRight: renderSettningsMenu,
				headerTransparent: true,
			}}
		>
			<Stack.Group>
				<Stack.Screen
					component={BottomNavigationStack}
					name="Home"
					options={({ route }) => ({ title: getHeaderTitle(route) })}
				/>
				<Stack.Screen
					name="Settings"
					component={SettingsStack}
					options={({ route }) => ({
						title: getHeaderTitle(route),
					})}
				/>
				<Stack.Screen
					component={EntryFormScreen}
					name="EntryForm"
					options={{
						presentation: 'containedModal',
						title: '',
					}}
				/>
				<Stack.Screen
					component={DetailedEntryScreen}
					name="DetailedEntry"
					options={{
						presentation: 'modal',
						title: '',
						headerRight: () => <></>,
					}}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
}

export default GuardianStack;
