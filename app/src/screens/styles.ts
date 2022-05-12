import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'stretch',
		paddingBottom: 20
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		margin: 12
	},
	column: {
		borderRadius: 20,
		padding: 16,
		flex: 1,
	},
	centerModal: {
		justifyContent:'center',
		padding: 50,
		marginLeft: 50,
		marginRight: 50,
		marginTop: 'auto',
		marginBottom: 'auto',
		borderRadius: 30,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.80,
		shadowRadius: 120
	}
});

export default styles;
