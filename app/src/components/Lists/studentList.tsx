import { FlatList } from "react-native"
import { StudentResponse } from "../../utils/types"
import { StudentCard } from "../Cards"

type StudentListProps = {
	students: StudentResponse[],
	onPress: (id: string) => void,
}

export const StudentList = ({students, onPress}: StudentListProps) => {
	return (
		<FlatList
			data={students}
			renderItem={({item}) => (<StudentCard name={item.name} week={3} month={14} onPress={() => onPress(item.id)} studentId={item.id}/>)}
		/>
	)
}
