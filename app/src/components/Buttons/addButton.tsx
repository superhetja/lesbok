import { Button, useTheme } from '@ui-kitten/components';
import React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { PlusCircle } from 'react-native-feather';

export type Props = {
	onPress: (event: GestureResponderEvent) => void;
	style?: StyleProp<ViewStyle>;
};

export function AddButton({ onPress, style = {} }: Props) {
	const theme = useTheme();

	const renderIcon = () => (
		<PlusCircle color={theme['color-primary-default']} width={60} height={60} />
	);

	return (
		<Button
			style={style}
			appearance="outline"
			onPress={e => onPress(e)}
			accessoryLeft={renderIcon}
		/>
	);
}

export default AddButton;
