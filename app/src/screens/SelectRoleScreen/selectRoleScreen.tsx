import { Layout } from "@ui-kitten/components"
import { RoleCard } from "../../components/Cards"

const SelectRoleScreen = ({}) => {
	return (
		<Layout>
			<RoleCard role={'Teacher'}/>
			<RoleCard role={'Foreldri'}/>
		</Layout>
	)
}

export default SelectRoleScreen;
