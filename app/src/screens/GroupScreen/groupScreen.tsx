import { Menu, Layout, MenuItem } from "@ui-kitten/components"
import { useSelector } from "react-redux";
import { selectCurrentGroup } from "../../slices/globalSlice";

const GroupScreen = ({}) => {
	const currentGroup = useSelector(selectCurrentGroup);

	return (
		<Layout level='3'>
			<Menu>
			</Menu>
		</Layout>
	)
}

export default GroupScreen;
