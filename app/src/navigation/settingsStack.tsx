import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from '../components/Buttons';
import {
	InformationScreen,
	NotificationScreen,
	NotificationFormScreen,
} from '../screens';
import { SettingsStackParamList } from './types';
import { EventHandlerType } from '../utils/types';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

function SettingsStack() {
	const renderCloseButton = (onPress: EventHandlerType) => (
		<IconButton icon="close" onPress={onPress} />
	);

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Information" component={InformationScreen} />
			<Stack.Screen name="Notification" component={NotificationScreen} />
			<Stack.Screen
				name="NotificationForm"
				component={NotificationFormScreen}
				options={({ navigation }) => ({
					presentation: 'modal',
					headerShown: true,
					title: 'Skrá nýja áminningu',
					headerLeft: () => renderCloseButton(() => navigation.goBack()),
				})}
			/>
		</Stack.Navigator>
	);
}

export default SettingsStack;
