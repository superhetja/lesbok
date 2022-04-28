import { TopNavigation } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';
import SetNotifications from '../../components/Notifications/Notifications';
import styles from '../styles';

export const NotificationScreen = () => {
	return(
		<SafeAreaView style={styles.container}>
			<SetNotifications/>
		</SafeAreaView>
	)
}
