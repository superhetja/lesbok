import { TopNavigation, Text, Button } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import SetNotifications from '../../components/Notifications/Notifications';
import styles from '../styles';
import * as Notifications from 'expo-notifications';
import { allowsNotificationsAsync, cancelNotification, getAllNotifications, requestPermissionsAsync } from '../Notification/notification'
import { NotificationList } from '../../components/Lists';
import { RootStackScreenProps } from '../../navigation';

type NotificationScreenProps = RootStackScreenProps<'Notification'>;

const NotificationScreen = ({navigation}: NotificationScreenProps) => {
	const [notifications, setNotifications] = useState<Notifications.NotificationRequest[]>([]);
	const [needRefetch, setNeedRefetch] = useState(true);

	/**
	 * We want to check everytime if we need to refetch notifications!
	 */
	useEffect(() => {
		if(needRefetch) {

			const getNotifictions = async () => {
				const n = await getAllNotifications();
				setNotifications(n);
			}
			getNotifictions();
			setNeedRefetch(false);
		}
	})

	/**
	 * We only want to register once!
	 */
	useEffect(() => {
		const registerNotifications = async () => {
			const isAllowed = await allowsNotificationsAsync();
			if(!isAllowed) {
				requestPermissionsAsync();
			}
		}
		registerNotifications()
	}, [])

	const onDeleteCallback = (id: string) => {
		cancelNotification(id);
		setNeedRefetch(true);
	}


	return(
		<View style={{flex:1}}>
			<Button onPress={() => navigation.navigate('NotificationForm')}>Skrá nýja tilkynningu</Button>
			{notifications && notifications.length !== 0 &&
					<NotificationList notifications={notifications} onDeleteCallback={onDeleteCallback}/>
				}
		</View>

	)
}

export default NotificationScreen;
