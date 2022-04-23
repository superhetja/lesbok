import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Layout } from '@ui-kitten/components';
import { AppNavigator } from './src/navigation';
import FlashMessage from 'react-native-flash-message';
import * as Notifications from 'expo-notifications';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';


export default function App() {


	return (
		<Provider store={store}>
			<ApplicationProvider {...eva} theme={eva.light}>

					<AppNavigator />
				{/* <SafeAreaView style={styles.container}>



					<EntryList />
					<EntryForm />
					<StatusBar />
				</SafeAreaView> */}
				<FlashMessage position={'top'} />
			</ApplicationProvider>
		</Provider>
	);
}
