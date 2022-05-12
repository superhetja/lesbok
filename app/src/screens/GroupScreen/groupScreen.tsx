import { Spinner, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StudentList } from '../../components/Lists';
import { TeacherStackScreenProps } from '../../navigation/types';
import { useGetGroupByIdQuery } from '../../services/backend';
import {
	selectCurrentGroup,
	setCurrentStudent,
} from '../../slices/globalSlice';
import { GroupDetailedResponse, StudentResponse } from '../../utils/types';

const SORT = {
	NAME_ASC: 0,
	NAME_DESC: 1,
	WEEK_ASC: 2,
	WEEK_DESC: 3,
	MONTH_ASC: 4,
	MONTH_DESC: 5,
};

type GroupScreenProps = TeacherStackScreenProps<'Group'>;

function GroupScreen({ route, navigation }: GroupScreenProps) {
	const [skip, setSkip] = useState(true);
	const groupId = useSelector(selectCurrentGroup);
	const [students, setStudents] = useState<StudentResponse[]>([]);
	const { data: group, isFetching, isLoading } = useGetGroupByIdQuery(groupId);

	const [sort, setSort] = useState(SORT.NAME_ASC);

	// sort students by name
	useEffect(() => {
		const sortStudents = (group: GroupDetailedResponse) => {
			setSkip(false);
			const studentsToSort = [...group.students];
			switch (sort) {
				case SORT.NAME_ASC:
					studentsToSort.sort((a, b) => a.name.localeCompare(b.name, 'is'));
					break;
				case SORT.NAME_DESC:
					studentsToSort.sort((a, b) => b.name.localeCompare(a.name, 'is'));
					break;
				case SORT.MONTH_ASC:
				default:
					break;
			}
			setStudents(studentsToSort);
		};

		if (group) {
			sortStudents(group);
			navigation.setOptions({ title: group.name });
		}
	}, [group, sort]);

	const dispatch = useDispatch();

	const onChildPress = (id: string) => {
		dispatch(setCurrentStudent({ studentId: id }));
		navigation.navigate('Home', {
			screen: 'Dashboard',
			params: { studentId: id },
		});
	};

	const onSortPress = (sorter: 'name' | 'week' | 'month') => {
		let s;
		switch (sorter) {
			case 'name':
				s = sort === SORT.NAME_ASC ? SORT.NAME_DESC : SORT.NAME_ASC;
				break;
			case 'week':
				s = sort === SORT.WEEK_ASC ? SORT.WEEK_DESC : SORT.WEEK_ASC;
				break;
			case 'month':
				s = sort === SORT.MONTH_ASC ? SORT.MONTH_DESC : SORT.MONTH_ASC;
				break;
		}
		setSort(s);
	};

	return (
		<SafeAreaView>
			<View
				style={{
					backgroundColor: '#fff',
					borderRadius: 20,
					flexDirection: 'row',
					justifyContent: 'space-between',
					margin: 8,
					padding: 12,
				}}
			>
				<Pressable onPress={() => onSortPress('name')}>
					<Text style={{}}>Nafn</Text>
				</Pressable>
				<Pressable>
					<Text onPress={() => onSortPress('week')}>Vikan</Text>
				</Pressable>
				<Pressable>
					<Text onPress={() => onSortPress('month')}>Heild</Text>
				</Pressable>
			</View>
			{(isLoading || isFetching) && <Spinner />}
			{students ? (
				<StudentList students={students} onPress={onChildPress} />
			) : (
				<Text>Engir nemendur í hópi!</Text>
			)}
		</SafeAreaView>
	);
}

export default GroupScreen;
