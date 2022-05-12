import React from 'react';
import { Spinner, Text } from '@ui-kitten/components';
import { Pressable, View } from 'react-native';
import {
	useGetReadThisWeekQuery,
	useGetStudentScoreQuery,
} from '../../services/backend';

type StudentCardProps = {
	studentId: string;
	name: string;
	week: number;
	month: number;
	onPress: () => void;
};
export function StudentCard({
	studentId,
	name,
	week,
	month,
	onPress,
}: StudentCardProps) {
	const {
		data: score,
		isLoading: isLoadingScore,
		isFetching: isFetchingScore,
	} = useGetStudentScoreQuery(studentId);
	const {
		data: weekReading,
		isLoading: isLoadingWeek,
		isFetching: isFetchingWeek,
	} = useGetReadThisWeekQuery(studentId);

	return (
		<Pressable
			style={{
				borderRadius: 20,
				backgroundColor: '#fff',
				marginBottom: 8,
				marginHorizontal: 8,
				padding: 12,
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
			onPress={onPress}
		>
			<Text style={{ flex: 4 }} category="s1">
				{name}
			</Text>
			<View
				style={{
					flexDirection: 'row',
					flex: 1,
					justifyContent: 'space-between',
				}}
			>
				{isLoadingWeek || isFetchingWeek ? (
					<Spinner />
				) : (
					<Text style={{ marginHorizontal: 4 }}>{weekReading}</Text>
				)}
				{isLoadingScore || isFetchingScore ? (
					<Spinner />
				) : (
					<Text style={{ marginHorizontal: 4 }}>{score}</Text>
				)}
			</View>
		</Pressable>
	);
}
export default StudentCard;
