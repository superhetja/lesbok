import { Layout } from '@ui-kitten/components';
import React from 'react';
import { useDispatch } from 'react-redux';
import EntryList from '../../components/Lists/entryList';
import { useGetEntriesQuery } from '../../services/backend';
import styles from '../styles';

const ListScreen = () => {

	const { data: entries, isLoading } = useGetEntriesQuery();
	const dispatch = useDispatch();


	return(
		<Layout level='3' style={styles.container}>
			{/* <TopNavigation title='Seinustu færslur' /> */}
			<EntryList entries={entries} isLoading={isLoading} dispatch={dispatch}/>
			{/* <BottomNavigation /> */}
		</Layout>
	)
}

export default ListScreen;
