import { BottomNavigation, Datepicker } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import EntryForm from '../../components/EntryForm';
import EntryList from '../../components/Lists/entryList';
import TopNavigation from '../../components/Navigations/topNavigation';
import { useGetEntriesQuery } from '../../services/backend';
import styles from '../styles';

const ListScreen = () => {

	const { data: entries, isLoading } = useGetEntriesQuery();
	const dispatch = useDispatch();

	return(
		<SafeAreaView style={styles.container}>
			{/* <TopNavigation title='Seinustu færslur' /> */}
			<EntryList entries={entries} isLoading={isLoading} dispatch={dispatch}/>
			{/* <BottomNavigation /> */}
		</SafeAreaView>
	)
}

export default ListScreen;
