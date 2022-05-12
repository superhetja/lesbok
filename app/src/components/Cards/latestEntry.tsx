/* eslint-disable camelcase */
import React from 'react';
import { Text } from '@ui-kitten/components';
import { MessageSquare } from 'react-native-feather';
import { GestureResponderEvent, Pressable, View } from 'react-native';
import { getDateFormated } from '../../utils/helpers';

type LatestEntryProp = {
	book_name: string;
	page_from: string;
	page_to: string;
	comment?: string;
	date: string;
	onEditClick?: (event: GestureResponderEvent) => void;
	onCardPress: (event: GestureResponderEvent) => void;
};

function LatestEntry({
	book_name,
	page_from,
	page_to,
	comment,
	date,
	onCardPress,
}: LatestEntryProp) {
	const formattedDate = getDateFormated(date);
	return (
		<Pressable
			onPress={onCardPress}
			style={{
				flex: 1,
				paddingVertical: 12,
				paddingHorizontal: 16,
				backgroundColor: '#fff',
				borderRadius: 20,
				marginVertical: 6,
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<View>
					<Text>{formattedDate}</Text>

					<Text category="h5">{book_name}</Text>
				</View>
				{/* <Text category="label">Seinasta færsla</Text> */}
				{/* <IconButton onPress={onEditClick} icon='edit' /> */}
				<Text style={{ fontSize: 20 }}>
					{page_from}-{page_to}
				</Text>
			</View>
			{comment !== '' && comment && (
				<>
					<MessageSquare color="grey" />
					<Text>{comment}</Text>
				</>
			)}
		</Pressable>
	);
}

export default LatestEntry;
