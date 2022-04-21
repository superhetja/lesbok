import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import EntryList from '../../components/Lists/entryList';
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
