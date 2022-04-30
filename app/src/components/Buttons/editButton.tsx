import { Button } from '@ui-kitten/components';
import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import { Edit2 } from 'react-native-feather';

export type Props = {
	onPress: (event: GestureResponderEvent) => void;
};

const EditButton= ({ onPress }: Props) => {
	return (
		<Button
			appearance='ghost'
			onPress={onPress}
			accessoryLeft={() => (<Edit2/>)}
		/>
	);
}

export default EditButton;
