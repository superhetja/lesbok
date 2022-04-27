import { Text, Layout, Spinner, Icon, Button } from "@ui-kitten/components";
import { useDispatch } from "react-redux";
import LatestEntry from "../../components/Cards/latestEntry";
import ScoreCard from "../../components/Cards/scoreCard";
import { useGetReadThisWeekQuery, useGetStudentScoreQuery, useGetEntriesQuery, useGetStudentByIdQuery } from "../../services/backend";
import styles from "../styles";
import { View } from "react-native";
import { selectEntry } from "../../slices/globalSlice";
import SettingsMenu from "../../components/SettingsMenu/SettingsMenu";
import { Star } from "react-native-feather";
import { useState } from "react";
import Rewards from "../../components/Rewards/Rewards";
import ThisWeekCard from "../../components/Cards/thisWeekCard";
import { HomeTabScreenProps } from "../../navigation";
import Informations from "../../components/Informations/Informations";
import { InformationScreen } from "../InformationScreen/informationScreen";

type DashboardScreenProps = HomeTabScreenProps<'Dashboard'>;

const DashboardScreen = ({route}: DashboardScreenProps) => {
	// Get the student
	const {data: student, isLoading: isLoadingStudent, isFetching: isFetchingStudent } = useGetStudentByIdQuery(route.params.studentId);

	const {data: readThisWeek, isLoading: loadingRead} = useGetReadThisWeekQuery();
	const {data: score, isLoading: loadingScore} = useGetStudentScoreQuery();
	const { entry } = useGetEntriesQuery(undefined, {
		selectFromResult: ({ data }) => ({
			entry: (data!== undefined && data[0]) ?? []
		})
	});
	const dispatch = useDispatch();

	if(isLoadingStudent || isFetchingStudent ) return <Spinner/>;

	return(
		<Layout level='3' style={styles.container}>
			<Layout style={[styles.row, {flex: 2}]}>
			<View style={{padding: 16, justifyContent:'flex-end', marginBottom: 16}}>
				{
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
					onEditClick={
						() => dispatch(
							selectEntry({
								selectedEntryId: entry.id,
								formData: {
									book_id: entry.book.id,
									book_name: entry.book.name,
									book_from: parseInt(entry.page_from),
									book_to: parseInt(entry.page_to),
									comment: entry.comment?? '',
									date_of_entry: entry.date_of_entry
								}
					}))}
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
