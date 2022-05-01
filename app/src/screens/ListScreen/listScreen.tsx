import { Layout, Spinner, Text } from '@ui-kitten/components';
import React from 'react';
import { useDispatch } from 'react-redux';
import EntryList from '../../components/Lists/entryList';
import { HomeTabScreenProps } from '../../navigation';
import { useGetEntriesQuery, useGetStudentEntriesQuery } from '../../services/backend';
import styles from '../styles';

type ListScreenProps = HomeTabScreenProps<'EntryList'>;

const ListScreen = ({route, navigation}: ListScreenProps) => {

	const {data: studentEntries, isFetching, isLoading} = useGetStudentEntriesQuery(route.params.studentId);
	const dispatch = useDispatch();

	const onEditEntry = (entryId: string) => {
		navigation.navigate('EntryForm', {studentId: route.params.studentId, entryId: entryId})
	}
	const onSelectEntry = (entryId: string) => {
		navigation.navigate('DetailedEntry', {entryId: entryId})
	}

	if( isLoading || isFetching) return <Spinner/>

	return(
		<Layout level='3' style={styles.container}>
			{/* <TopNavigation title='Seinustu færslur' /> */}
			{ studentEntries?.entries ?
				<EntryList
					entries={studentEntries.entries}
					onEdit={onEditEntry}
					onCardPress={onSelectEntry}
					/>
				: <Text>No entries found</Text>
			}
			{/* <BottomNavigation /> */}
		</Layout>
	)
}

export default ListScreen;
