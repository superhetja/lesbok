import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Menu, Layout, MenuItem, Spinner, Text } from "@ui-kitten/components"
import { RootStackScreenProps } from "../../navigation";
import { useGetGroupByIdQuery } from "../../services/backend";

type GroupScreenProps = RootStackScreenProps<'Group'>;

const GroupScreen = ({ route, navigation }: GroupScreenProps) => {
	const {
		data: group,
		isFetching,
		isLoading,
	} = useGetGroupByIdQuery(route.params.groupId);

	const onChildPress = (id: string) => {
		navigation.navigate('Home', {
			screen: 'Dashboard',
			params: {studentId: id}
		});
	}


	return (
		<Layout level='3'>
			{ (isLoading || isFetching) &&
				<Spinner />
			}
			{ group ?
			 <Menu>
				{
					group.students.map(s =>
						<MenuItem title={s.name} key={s.id} onPress={() => onChildPress(s.id)}/>
					)
				}
			 </Menu>
			: <Text>Engir nemendur í hópi!</Text>
			}
		</Layout>
	)
}

export default GroupScreen;