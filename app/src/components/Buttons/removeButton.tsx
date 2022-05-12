import React from 'react';
import { Button } from '@ui-kitten/components';
import { GestureResponderEvent } from 'react-native';
import { Trash } from 'react-native-feather';

type RemoveButtonProps = {
	onPress: (event: GestureResponderEvent) => void;
};

function RemoveButton({ onPress }: RemoveButtonProps) {
	return (
		<Button
			appearance="ghost"
			onPress={onPress}
			accessoryLeft={() => <Trash />}
		/>
	);
}

export default RemoveButton;
