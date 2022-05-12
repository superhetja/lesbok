import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	navigationWrapper: {
		position: 'relative',
	},
	button: {
		borderRadius: 50,
		backgroundColor: '#ffffff',
	},
	buttonWrapper: {
		zIndex: 20,
		position: 'absolute',
		top: -20,
		left: 0,
		right: 0,
		bottom: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
});

export default styles;
