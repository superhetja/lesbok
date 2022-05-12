import { Layout, Spinner, Text } from "@ui-kitten/components"
import { Pressable, View } from "react-native";
import { useGetReadThisWeekQuery, useGetStudentScoreQuery } from "../../services/backend";

type StudentCardProps = {
	studentId: string;
	name: string;
	week: number;
	month: number;
	onPress: () => void;
}
export const StudentCard = ({ studentId, name, week, month, onPress}: StudentCardProps) => {
	const {data: score, isLoading: isLoadingScore, isFetching: isFetchingScore} = useGetStudentScoreQuery(studentId)
	const {data: weekReading, isLoading: isLoadingWeek, isFetching: isFetchingWeek} = useGetReadThisWeekQuery(studentId)

	return (
		<Pressable style={{borderRadius: 20, backgroundColor: '#fff', marginBottom: 8, marginHorizontal: 8, padding: 12, flexDirection:'row', justifyContent: 'space-between'}} onPress={onPress}>
			<Text category={'s1'}>{name}</Text>
			<View>
				{
					isLoadingWeek||isFetchingWeek
					? <Spinner/>
					: <Text>{weekReading}</Text>
				}
				{
					isLoadingScore||isFetchingScore
					? <Spinner/>
					: <Text>{score}</Text>
				}
				{/* <Text>{week}</Text>
				<Text>{month}</Text> */}
			</View>
		</Pressable>
	)
}
