import { BottomNavigation, Datepicker } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import EntryForm from '../../components/EntryForm';
import EntryList from '../../components/Lists/entryList';
import TopNavigation from '../../components/Navigations/topNavigation';
import styles from '../styles';

const ListScreen = ({navigation}) => {
	return(
		<SafeAreaView style={styles.container}>
			{/* <TopNavigation title='Seinustu færslur' /> */}
			<EntryList />
			<EntryForm />
			{/* <BottomNavigation /> */}
		</SafeAreaView>
	)
}

export default ListScreen;
