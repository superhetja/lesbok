/* eslint-disable import/extensions */
import React from 'react';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import FlashMessage from 'react-native-flash-message';
import * as Notifications from 'expo-notifications';
import { AppNavigator } from './src/navigation';
import store from './configureStore';
import theme from './theme/theme.json';
import mapping from './theme/mapping.json';

export default function App() {
	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldShowAlert: true,
			shouldPlaySound: true,
			shouldSetBadge: true,
		}),
	});

	return (
		<Provider store={store}>
			<ApplicationProvider
				{...eva}
				theme={{ ...eva.light, ...theme }}
				customMapping={mapping as any}
			>
				<AppNavigator />
				<FlashMessage position="top" />
			</ApplicationProvider>
		</Provider>
	);
}
