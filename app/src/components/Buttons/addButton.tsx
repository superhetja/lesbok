import { Button } from '@ui-kitten/components';
import React from 'react';
import { GestureResponderEvent, Pressable, StyleProp, ViewStyle } from 'react-native';
import { PlusCircle } from 'react-native-feather';

export type Props = {
	onPress: (event: GestureResponderEvent) => void;
	style?: StyleProp<ViewStyle>
};

const AddButton: React.FC<Props> = ({ onPress, style={} }) => {
	return (
		<Button style={style} appearance='outline' onPress={(e) => onPress(e)} accessoryLeft={() => (<PlusCircle width={60} height={60}/> )} />
	);
}

export default AddButton;
