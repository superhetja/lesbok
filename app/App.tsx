import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import BookForm from './src/components/BookForm';
import store from './configureStore';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<BookForm />
				{/* <Text>Hello World!</Text> */}
				{/* <Text>{data && data[0].firstName}</Text> */}
				{/* <Text>{JSON.stringify(data)}</Text> */}
				<StatusBar />
			</View>
		</Provider>
	);
}
