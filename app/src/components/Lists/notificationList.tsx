import React from 'react';
import { Divider, List, ListItem } from '@ui-kitten/components';
import {
	CalendarNotificationTrigger,
	NotificationRequest,
	WeeklyNotificationTrigger,
} from 'expo-notifications';
import { View } from 'react-native';
import { DAYS } from '../../utils/constants';
import { IconButton } from '../Buttons';
import { EventHandlerType } from '../../utils/types';

interface WeeklyNotificationRequest extends NotificationRequest {
	trigger: WeeklyNotificationTrigger | CalendarNotificationTrigger;
}

type NotificationListProp = {
	notifications: WeeklyNotificationRequest[];
	onDeleteCallback: (id: string) => void;
};

type RenderItemProp = {
	item: WeeklyNotificationRequest;
	index: number;
};

function NotificationList({
	notifications,
	onDeleteCallback,
}: NotificationListProp) {
	const renderRemoveButton = (onPress: EventHandlerType) => (
		<IconButton icon="remove" onPress={onPress} />
	);

	const renderItem = ({ item, index }: RenderItemProp) => {
		const date =
			item.trigger.type === 'weekly'
				? item.trigger
				: item.trigger.dateComponents;
		return (
			<ListItem
				title={`${DAYS[date?.weekday - 1]} | ${date.hour}:${date.minute}`}
				description={item?.content?.body ?? undefined}
				accessoryRight={() =>
					renderRemoveButton(() => onDeleteCallback(item.identifier))
				}
			/>
		);
	};

	return (
		<View style={{ flex: 1 }}>
			<List
				data={notifications}
				ItemSeparatorComponent={Divider}
				renderItem={renderItem}
			/>
		</View>
	);
}

export default NotificationList;
