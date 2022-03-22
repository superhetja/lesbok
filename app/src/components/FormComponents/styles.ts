import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderWidth: 1,
		alignSelf: 'stretch'
	},
	container: {
		backgroundColor: '#ffffff',
		padding: 10,
	},
	label: {
		margin: 10,
		marginLeft: 0,
	},
	error: {
		color: 'red',
		fontSize: 14,
		fontStyle: 'italic',
	},
});

export default styles;
