import { Layout, Menu, MenuItem } from "@ui-kitten/components"
import { useDispatch, useSelector } from "react-redux"
import { selectUserChildren, selectUserGroups } from "../../slices/authSlice"
import { selectCurrentStudent, setCurrentGroup, setCurrentStudent } from "../../slices/globalSlice";
import { Roles } from "../../utils/types";


const SelectGroupScreen = ({navigation}) => {
	const userGroups = useSelector(selectUserGroups);
	const userChildren = useSelector(selectUserChildren);
	const dispatch = useDispatch();

	const selectMenuItem = (id: string) => {
		dispatch(setCurrentStudent({studentId: id}))
		navigation.navigate('home' as never);
	}

	const selectGroup = (id: string) => {
		dispatch(setCurrentGroup({groupId: id}))
		navigation.navigate('group' as never);
	}

	return (
		<Layout level='3'>
			{
				userChildren?.map(child => (
					<MenuItem title={child.name} key={child.id} onPress={() => selectMenuItem(child.id)} />
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
