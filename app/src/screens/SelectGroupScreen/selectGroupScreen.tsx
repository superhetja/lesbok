import { Layout, Menu, MenuItem } from "@ui-kitten/components"
import { useDispatch, useSelector } from "react-redux"
import { RootStackScreenProps } from "../../navigation";
import { selectUserChildren, selectUserGroups } from "../../slices/authSlice"
import { setCurrentGroup, setCurrentStudent } from "../../slices/globalSlice";
import { Roles } from "../../utils/types";

type SelectGroupScreenProps = RootStackScreenProps<'GroupList'>;

const SelectGroupScreen = ({navigation}: SelectGroupScreenProps) => {
	const userGroups = useSelector(selectUserGroups);
	const userChildren = useSelector(selectUserChildren);
	const dispatch = useDispatch();

	const selectMenuItem = (id: string, name: string) => {
		dispatch(setCurrentStudent({studentId: id}))
		navigation.navigate('Home', {
			screen: 'Dashboard',
			params: {studentId: id}
		});
	}


	const selectGroup = (id: string) => {
		dispatch(setCurrentGroup({groupId: id}))
		navigation.navigate('Group', { groupId: id });
	}

	return (
		<Layout level='3'>
			{
				userChildren?.map(child => (
					<MenuItem title={child.name} key={child.id} onPress={() => selectMenuItem(child.id, child.name)} />
				))
			}
			{
				userGroups?.filter(group => group.Access.role === Roles.TEACHER)?.map(group => (
					<MenuItem title={group.name} key={group.id} onPress={() => selectGroup(group.id)} />
				))
			}
		</Layout>
	)
}

export default SelectGroupScreen;
