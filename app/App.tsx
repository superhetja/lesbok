import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import EntryForm from './src/components/EntryForm';
import store from './configureStore';
import EntryList from './src/components/Lists/entryList';
import { useGetEntriesQuery } from './src/services/backend';
import { AddButton } from './src/components/Buttons';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center'
	},
});


export default function App() {


	return (
		<Provider store={store}>
			<ApplicationProvider {...eva} theme={eva.light}>
				<SafeAreaView style={styles.container}>



					<EntryList />
					<EntryForm />
					<StatusBar />
				</SafeAreaView>
			</ApplicationProvider>
		</Provider>
	);
}
