import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BottomNavigation as UIKBottomNavigation, BottomNavigationTab, Layout } from "@ui-kitten/components"
import { Home, List, User } from "react-native-feather";
import { AddButton } from "../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedEntry, selectCurrentStudent, selectedEntryId, setCurrentStudent } from "../../slices/globalSlice";
import styles from "./styles";


const BottomNavigation = ({ navigation, state }:BottomTabBarProps) => {
	const student = useSelector(selectCurrentStudent);

	return (
		<Layout>
			<Layout style={styles.navigationWrapper}>
				<Layout style={styles.buttonWrapper}>
					{ student &&
						<AddButton style={styles.button} onPress={() => navigation.navigate('EntryForm', {studentId: student})} />
					}
				</Layout>
				<UIKBottomNavigation
					selectedIndex={state.index}
					// get the student id from route
					onSelect={index => navigation.navigate(state.routeNames[index], state.routes[state.index].params)}
				>
					<BottomNavigationTab icon={() => (<Home />)} />
					<BottomNavigationTab icon={() => (<List />)} />
					{/* <BottomNavigationTab icon={() => (<User />)} /> */}
				</UIKBottomNavigation>
			</Layout>
		</Layout>
	)
}

export default BottomNavigation;
