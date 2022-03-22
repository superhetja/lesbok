import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import { Edit2 } from 'react-native-feather';

export type Props = {
	onPress: (event: GestureResponderEvent) => void;
};

const EditButton: React.FC<Props> = ({ onPress }) => {
	return (
		<Pressable onPress={(e) => onPress(e)}>
			<Edit2 />
		</Pressable>
	);
}

export default EditButton;
