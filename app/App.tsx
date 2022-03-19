import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import EntryForm from './src/components/EntryForm';
import store from './configureStore';
import EntryList from './src/components/Lists/entryList';
import { useGetEntriesQuery } from './src/services/backend';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		paddingBottom: 20,
		paddingLeft: 10,
		paddingRight: 10,
	},
});


export default function App() {


	return (
		<Provider store={store}>
			<View style={styles.container}>
				<EntryList/>
				<EntryForm />
				{/* <Text>Hello World!</Text> */}
				{/* <Text>{data && data[0].firstName}</Text> */}
				{/* <Text>{JSON.stringify(data)}</Text> */}

				<StatusBar />
			</View>
		</Provider>
	);
}
