import { Button } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useIsFocused } from '@react-navigation/native';
import {
	allowsNotificationsAsync,
	cancelNotification,
	getAllNotifications,
	requestPermissionsAsync,
} from '../Notification/notification';
import { NotificationList } from '../../components/Lists';
import { SettingsStackScreenProps } from '../../navigation/types';

type NotificationScreenProps = SettingsStackScreenProps<'Notification'>;

function NotificationScreen({ navigation }: NotificationScreenProps) {
	const [notifications, setNotifications] = useState<
		Notifications.NotificationRequest[]
	>([]);
	const [needRefetch, setNeedRefetch] = useState(true);

	const isFocused = useIsFocused();

	/**
	 * We want to check everytime if we need to refetch notifications!
	 */
	useEffect(() => {
		const getNotifictions = async () => {
			const n = await getAllNotifications();
			setNotifications(n);
		};
		getNotifictions();
		setNeedRefetch(false);
	}, [isFocused, needRefetch]);

	/**
	 * We only want to register once!
	 */
	useEffect(() => {
		const registerNotifications = async () => {
			const isAllowed = await allowsNotificationsAsync();
			if (!isAllowed) {
				requestPermissionsAsync();
			}
		};
		registerNotifications();
	}, []);

	const onDeleteCallback = (id: string) => {
		cancelNotification(id);
		setNeedRefetch(true);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Button onPress={() => navigation.navigate('NotificationForm')}>
				Skrá nýja tilkynningu
			</Button>
			{notifications && notifications.length !== 0 && (
				<NotificationList
					notifications={notifications}
					onDeleteCallback={onDeleteCallback}
				/>
			)}
		</SafeAreaView>
	);
}

export default NotificationScreen;
