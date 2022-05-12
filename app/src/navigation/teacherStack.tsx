import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GroupScreen, EntryFormScreen, DetailedEntryScreen } from '../screens';
import { TeacherStackParamList } from './types';
import { SettingsMenu } from '../components/Navigations';
import BottomNavigationStack from './bottomNavigationStack';
import { getHeaderTitle } from './guardianStack';
import { IconButton } from '../components/Buttons';
import { EventHandlerType } from '../utils/types';

const Stack = createNativeStackNavigator<TeacherStackParamList>();

function TeacherStack() {
	const renderSettingsIcon = () => <SettingsMenu />;

	const renderCloseButton = (onPress: EventHandlerType) => (
		<IconButton icon="close" onPress={onPress} />
	);

	return (
		<Stack.Navigator
			screenOptions={{
				headerTransparent: true,
			}}
		>
			<Stack.Group screenOptions={{ headerRight: () => renderSettingsIcon() }}>
				<Stack.Screen name="Group" component={GroupScreen} />
				<Stack.Screen
					component={BottomNavigationStack}
					name="Home"
					options={({ route }) => ({
						title: getHeaderTitle(route),
					})}
				/>
			</Stack.Group>
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
				options={({ navigation }) => ({
					presentation: 'modal',
					title: '',
					headerLeft: () => renderCloseButton(() => navigation.goBack()),
				})}
			/>
		</Stack.Navigator>
	);
}

export default TeacherStack;
