import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BottomNavigation as UIKBottomNavigation, BottomNavigationTab, Layout } from "@ui-kitten/components"
import { Home, List, User } from "react-native-feather";
import { AddButton } from "../Buttons";
import EntryForm from '../../components/EntryForm';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedEntry, selectedEntryId } from "../../slices/globalSlice";
import styles from "./styles";


const BottomNavigation = ({ navigation, state }:BottomTabBarProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const selectedId = useSelector(selectedEntryId);
	const dispatch = useDispatch();

	const toggleModal = () => {
		// clear selected values if we are canceling
		if(selectedId && isVisible) {
			dispatch(clearSelectedEntry());
		}
		setIsVisible(!isVisible);
	};

	return (
		<Layout>
			<EntryForm
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				toggleModal={toggleModal}
				selectedId={selectedId}
			/>
			<Layout style={styles.navigationWrapper}>
				<Layout style={styles.buttonWrapper}>
					<AddButton style={styles.button} onPress={toggleModal} />
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
