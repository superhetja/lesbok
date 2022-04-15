import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
		alignSelf: 'stretch'
  },
  item: {
		flexDirection: "row",
    backgroundColor: '#f9c2ff',
    padding: 20,
		justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
		color: '#000000'
  },
});

export default styles;
