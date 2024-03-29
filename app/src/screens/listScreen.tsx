import { Spinner, Text } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import EntryList from '../components/Lists/entryList';
import { HomeTabScreenProps } from '../navigation';
import { useGetStudentEntriesQuery } from '../services/backend';
import { selectCurrentStudent } from '../slices/globalSlice';
import styles from './styles';

type ListScreenProps = HomeTabScreenProps<'EntryList'>;

function ListScreen({ route, navigation }: ListScreenProps) {
	const studentID = useSelector(selectCurrentStudent);
	if (!studentID) {
		return <Text>Úpps eitthvað fór úrskeiðis</Text>;
	}

	const {
		data: studentEntries,
		isFetching,
		isLoading,
		// eslint-disable-next-line react-hooks/rules-of-hooks
	} = useGetStudentEntriesQuery(studentID);

	const onEditEntry = (entryId: string) => {
		navigation.navigate('EntryForm', {
			studentId: route.params.studentId,
			entryId,
		});
	};
	const onSelectEntry = (entryId: string) => {
		navigation.navigate('DetailedEntry', { entryId });
	};

	if (isLoading || isFetching) return <Spinner />;

	return (
		<SafeAreaView style={styles.container}>
			{studentEntries?.entries ? (
				<EntryList
					entries={studentEntries.entries}
					onEdit={onEditEntry}
					onCardPress={onSelectEntry}
				/>
			) : (
				<Text>No entries found</Text>
			)}
		</SafeAreaView>
	);
}

export default ListScreen;
