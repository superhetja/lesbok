import { Layout, Spinner, Text } from '@ui-kitten/components';
import React from 'react';
import { DrawerLayoutAndroidComponent, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EntryList from '../../components/Lists/entryList';
import { HomeTabScreenProps } from '../../navigation';
import { useGetEntriesQuery, useGetStudentEntriesQuery } from '../../services/backend';
import { selectCurrentStudent } from '../../slices/globalSlice';
import styles from '../styles';

type ListScreenProps = HomeTabScreenProps<'EntryList'>;

const ListScreen = ({route, navigation}: ListScreenProps) => {

	const studentID = useSelector(selectCurrentStudent);
	if (!studentID) {
		return ( <Text>Úpps eitthvað fór úrskeiðis</Text>)
	}

	navigation.setOptions({title: 'Færslur'})

	const {data: studentEntries, isFetching, isLoading} = useGetStudentEntriesQuery(studentID);
	const dispatch = useDispatch();

	const onEditEntry = (entryId: string) => {
		navigation.navigate('EntryForm', {studentId: route.params.studentId, entryId: entryId})
	}
	const onSelectEntry = (entryId: string) => {
		navigation.navigate('DetailedEntry', {entryId: entryId})
	}

	if( isLoading || isFetching) return <Spinner/>

	return(
		<SafeAreaView style={styles.container}>

		{/* <Layout level='3' style={styles.container}> */}
			{ studentEntries?.entries ?
				<EntryList
				entries={studentEntries.entries}
				onEdit={onEditEntry}
				onCardPress={onSelectEntry}
				/>
				: <Text>No entries found</Text>
			}
		{/* </Layout> */}
			</SafeAreaView>
	)
}

export default ListScreen;
