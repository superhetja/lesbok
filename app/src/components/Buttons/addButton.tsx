import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import { PlusCircle } from 'react-native-feather';

export type Props = {
	onPress: (event: GestureResponderEvent) => void;
};

const AddButton: React.FC<Props> = ({ onPress }) => {
	return (
		<Pressable onPress={(e) => onPress(e)}>
			<PlusCircle />
		</Pressable>
	);
}

export default AddButton;
