import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef, SetStateAction } from 'react';
import { Platform, View } from 'react-native';
import { Subscription } from 'expo-modules-core';
import { DAYS } from './constants';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: true,
	}),
});

export default function Notification() {
	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] =
		useState<Notifications.Notification>();
	const notificationListener = useRef<Subscription>();
	const responseListener = useRef<Subscription>();

	useEffect(() => {
		registerForPushNotificationsAsync().then(token => {
			if (token) {
				return setExpoPushToken(token);
			}
		});

		notificationListener.current =
			Notifications.addNotificationReceivedListener(notification => {
				setNotification(notification);
			});

		responseListener.current =
			Notifications.addNotificationResponseReceivedListener(response => {
				console.log(response);
			});

		return () => {
			if (
				notificationListener.current !== undefined &&
				responseListener.current !== undefined
			) {
				Notifications.removeNotificationSubscription(
					notificationListener.current,
				);
				Notifications.removeNotificationSubscription(responseListener.current);
			}
		};
	}, []);
	return null;
}

export async function schedulePushNotification(
	className: string,
	slot: string,
	type: string,
	time: Date,
	day: string,
) {
	time = new Date(time.getTime() - 5 * 60000);
	const weekday = DAYS.indexOf(day) + 1;
	const hours = time.getHours();
	const minutes = time.getMinutes() + 5;
	const id = await Notifications.scheduleNotificationAsync({
		content: {
			title: `${className} ${type}`,
			body: slot,
			sound: 'default',
		},
		trigger: {
			weekday,
			hour: hours,
			minute: minutes,
			repeats: true,
		},
	});
	return id;
}

async function registerForPushNotificationsAsync() {
	let token;
	if (Constants.isDevice) {
		const { status: existingStatus } =
			await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== 'granted') {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		if (finalStatus !== 'granted') {
			alert('Failed to get push token for push notification!');
			return;
		}
		token = (await Notifications.getExpoPushTokenAsync()).data;
		console.log(token);
	} else {
		alert('Must use physical device for Push Notifications');
	}

	if (Platform.OS === 'android') {
		Notifications.setNotificationChannelAsync('default', {
			name: 'default',
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			sound: 'true',
			lightColor: '#FF231F7C',
			lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
			bypassDnd: true,
		});
	}

	return token;
}

export async function requestPermissionsAsync() {
	return Notifications.requestPermissionsAsync({
		ios: {
			allowAlert: true,
			allowBadge: true,
			allowSound: true,
			allowAnnouncements: true,
		},
	});
}

export async function getAllNotifications() {
	return Notifications.getAllScheduledNotificationsAsync();
}

export async function cancelNotification(notifId: string) {
	await Notifications.cancelScheduledNotificationAsync(notifId);
}

export async function allowsNotificationsAsync() {
	const settings = await Notifications.getPermissionsAsync();
	return (
		settings.granted ||
		settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
	);
}
