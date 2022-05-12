import React from 'react';
import { Button } from '@ui-kitten/components';
import { View } from 'react-native';

type RoleCardProps = {
	role: string;
};

function RoleCard({ role }: RoleCardProps) {
	return (
		<View>
			<Button size="giant">{role}</Button>
		</View>
	);
}

export default RoleCard;
