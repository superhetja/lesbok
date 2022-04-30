import { Text, Layout, Spinner, Button } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import LatestEntry from "../../components/Cards/latestEntry";
import ScoreCard from "../../components/Cards/scoreCard";
import { useGetReadThisWeekQuery, useGetStudentScoreQuery, useGetStudentByIdQuery, useGetStudentEntriesQuery, useSetExpoPushTokenMutation } from "../../services/backend";
import styles from "../styles";
import { View } from "react-native";
import ThisWeekCard from "../../components/Cards/thisWeekCard";
import { HomeTabScreenProps } from "../../navigation";
import { selectCurrentUser } from "../../slices/authSlice";
import pushNotificationSetupAsync from "../../utils/notification/pushNotificationSetup";

type DashboardScreenProps = HomeTabScreenProps<'Dashboard'>;

const DashboardScreen = ({route, navigation}: DashboardScreenProps) => {
	// Get the student
	const {data: student, isLoading: isLoadingStudent, isFetching: isFetchingStudent } = useGetStudentByIdQuery(route.params.studentId);
	const { entry } = useGetStudentEntriesQuery(route.params.studentId, {
		selectFromResult: ({ data }) => ({
			entry: (data!== undefined && data.entries[0]) ?? null
		})
	});

	console.log(entry? 'true': 'false')

	const {data: readThisWeek, isLoading: loadingRead} = useGetReadThisWeekQuery();
	const {data: score, isLoading: loadingScore} = useGetStudentScoreQuery();

	const dispatch = useDispatch();

	if(isLoadingStudent || isFetchingStudent ) return <Spinner/>;


	return(
		<Layout level='3' style={styles.container}>
			<Layout style={[styles.row, {flex: 2}]}>
			<View style={{padding: 16, justifyContent:'flex-end', marginBottom: 16}}>
				{
					( isLoadingStudent || isFetchingStudent ) ?
					<Spinner/>
					:
					student &&
					<Text style={{fontSize: 26}}>{student?.name}</Text>
				}
			</View>
			</Layout>
			<Layout style={[styles.row, {flex: 4}]}>
				<Layout style={{...styles.column}} >

				{ entry &&
				<LatestEntry
					book_name={entry.book.name}
					page_from={entry.page_from}
					page_to={entry.page_to}
					comment={entry.comment}
					date={entry.date_of_entry}
					onEditClick={() => navigation.navigate('EntryForm', {studentId: route.params.studentId, entryId: entry ? entry.id : ''})}
					onCardPress={() => navigation.navigate('DetailedEntry')}
					/>
			}
			</Layout>
			</Layout>
			<Layout style={[styles.row, {flex: 3}]}>
				<Layout style={[styles.column, {marginRight: 6}]}>
					{ loadingRead
						? <Spinner />
						: typeof(readThisWeek) === 'number' ?
						<ThisWeekCard readThisWeek={readThisWeek}/>
						: <Text>Error</Text>
					}
				</Layout>
				<Layout style={[styles.column, {marginLeft: 6}]}>
					{loadingScore
						? <Spinner />
						: score ?
						<ScoreCard score={score} />
						: <Text>ERROR</Text>
					}
				</Layout>
			</Layout>
		</Layout>
	)
}

export default DashboardScreen;
