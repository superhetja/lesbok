import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'stretch',
		paddingBottom: 50
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
	}
});

export default styles;
