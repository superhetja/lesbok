import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		padding: 20,
		marginBottom: 10,
	},
	telephoneWrapper: {
		// alignSelf: 'stretch',
		// width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#ffffff',

	},

	telephoneNumber: {
		flexBasis: '67%',
		marginLeft: 0,
	},
	welcomeText: {
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		padding: 20,
		marginBottom: 20,
	}

});

export default styles;
