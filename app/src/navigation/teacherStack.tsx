import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GroupScreen, EntryFormScreen, DetailedEntryScreen } from '../screens';
import { TeacherStackParamList } from './types';
import { SettingsMenu } from '../components/Navigations';
import BottomNavigationStack from './bottomNavigationStack';
import { getHeaderTitle } from './guardianStack';

const Stack = createNativeStackNavigator<TeacherStackParamList>();

function TeacherStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerRight: () => <SettingsMenu />,
				headerTransparent: true,
			}}
		>
			<Stack.Screen name="Group" component={GroupScreen} />
			<Stack.Screen
				component={BottomNavigationStack}
				name="Home"
				options={({ route }) => ({
					title: getHeaderTitle(route),
				})}
			/>
			<Stack.Screen
				component={EntryFormScreen}
				name="EntryForm"
				options={{
					presentation: 'containedModal',
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
		</Stack.Navigator>
	);
}

export default TeacherStack;
