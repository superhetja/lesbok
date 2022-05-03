import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Layout } from '@ui-kitten/components';
import { AppNavigator } from './src/navigation';
import FlashMessage from 'react-native-flash-message';
import * as Notifications from 'expo-notifications';

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
			<ApplicationProvider {...eva} theme={eva.light}>
					<AppNavigator />
				<FlashMessage position={'top'} />
			</ApplicationProvider>
		</Provider>
	);
}
