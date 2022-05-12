import { Text, Layout, Spinner } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScoreCard from '../../components/Cards/scoreCard';
import {
	useGetReadThisWeekQuery,
	useGetStudentScoreQuery,
	useGetStudentByIdQuery,
	useGetStudentEntriesQuery,
} from '../../services/backend';
import styles from '../styles';
import ThisWeekCard from '../../components/Cards/thisWeekCard';
import { HomeTabScreenProps } from '../../navigation';
import { selectCurrentStudent } from '../../slices/globalSlice';
import { LatestEntriesList } from '../../components/Lists';
import { HasReadTodayCard } from '../../components/Cards';
import { isToday } from '../../utils/helpers';

type DashboardScreenProps = HomeTabScreenProps<'Dashboard'>;

function DashboardScreen({ navigation }: DashboardScreenProps) {
	// start by checking if we have any as student ID. used as initial value!
	const studentID = useSelector(selectCurrentStudent);
	const [hasRead, setHasRead] = useState(false);

	if (!studentID) return <Text>Úps eitthvað fór úrskeiðis</Text>;
	// Get the student
	const {
		data: student,
		isLoading: isLoadingStudent,
		isFetching: isFetchingStudent,
	} = useGetStudentByIdQuery(studentID);
	const { entry } = useGetStudentEntriesQuery(studentID, {
		selectFromResult: ({ data }) => ({
			entry: (data !== undefined && data.entries.slice(0, 5)) ?? null,
		}),
	});

	/**
	 * check if student has read today!
	 */
	useEffect(() => {
		if (entry && entry.length > 0) {
			const lastEntryDate = new Date(entry[0].date_of_entry);
			if (isToday(lastEntryDate)) {
				setHasRead(true);
			}
		} else {
			setHasRead(false);
		}
	}, [entry]);

	const { data: readThisWeek, isLoading: loadingRead } =
		useGetReadThisWeekQuery(studentID);
	const { data: score, isLoading: loadingScore } =
		useGetStudentScoreQuery(studentID);

	if (isLoadingStudent || isFetchingStudent) return <Spinner />;

	return (
		<Layout level="3" style={styles.container}>
			<Layout style={[styles.row, { flex: 2 }]}>
				<View
					style={{ padding: 16, justifyContent: 'flex-end', marginBottom: 16 }}
				>
					{isLoadingStudent || isFetchingStudent ? (
						<Spinner />
					) : (
						student && <Text style={{ fontSize: 26 }}>{student?.name}</Text>
					)}
				</View>
			</Layout>
			<Layout style={{ ...styles.row }}>
				<Layout style={{ ...styles.column, justifyContent: 'center' }}>
					<HasReadTodayCard hasRead={hasRead} />
				</Layout>
			</Layout>
			<Layout style={[styles.row, { flex: 3 }]}>
				<Layout style={[styles.column, { marginRight: 6, zIndex: 100 }]}>
					{loadingRead ? (
						<Spinner />
					) : typeof readThisWeek === 'number' ? (
						<ThisWeekCard readThisWeek={readThisWeek} />
					) : (
						<Text>Error</Text>
					)}
				</Layout>
				<Layout
					style={[
						styles.column,
						{ justifyContent: 'center', alignItems: 'center' },
					]}
				>
					{loadingScore ? (
						<Spinner />
					) : score ? (
						<ScoreCard score={score} />
					) : (
						<Text style={{ fontSize: 72 }} category="h1">
							B+
						</Text>
					)}
				</Layout>
			</Layout>
			<Layout style={[styles.row, { flex: 4 }]}>
				<Layout
					style={{
						backgroundColor: 'transparent',
						flex: 1,
						marginVertical: -6,
					}}
				>
					{entry && <LatestEntriesList data={entry} />}
				</Layout>
			</Layout>
		</Layout>
	);
}

export default DashboardScreen;
