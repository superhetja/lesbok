import React from 'react';
import { Button } from '@ui-kitten/components';
import { View } from 'react-native';

type RoleCardProps = {
	roleTitle: string;
};

function RoleCard({ roleTitle }: RoleCardProps) {
	return (
		<View>
			<Button size="giant">{roleTitle}</Button>
		</View>
	);
}

export default RoleCard;
