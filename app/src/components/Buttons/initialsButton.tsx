import { Text, useTheme } from '@ui-kitten/components';
import React, { forwardRef } from 'react';
import { Pressable, View } from 'react-native';

type InitialsButtonProps = {
	initials: string;
	onPress: () => void;
};

export const InitialsButton = forwardRef<View, InitialsButtonProps>(
	({ initials, onPress }, ref) => {
		const theme = useTheme();

		return (
			<Pressable
				ref={ref}
				onPress={onPress}
				style={{
					borderColor: theme['color-primary-default'],
					borderWidth: 2,
					padding: 4,
					borderRadius: 50,
					width: 40,
					height: 40,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
					style={{
						fontSize: 14,
						fontWeight: '400',
						color: theme['color-primary-default'],
					}}
					category="s1"
				>
					{initials}
				</Text>
			</Pressable>
		);
	},
);

export default InitialsButton;
