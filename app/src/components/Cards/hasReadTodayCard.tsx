import React from 'react';
import { Text, useTheme } from '@ui-kitten/components';
import { View } from 'react-native';
import { CheckCircle, Circle } from 'react-native-feather';

type HasReadTodayCardProps = {
	hasRead: boolean;
};

export function HasReadTodayCard({ hasRead }: HasReadTodayCardProps) {
	const theme = useTheme();
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			{hasRead ? (
				<CheckCircle
					color={theme['color-success-600']}
					width={28}
					height={28}
				/>
			) : (
				<Circle color={theme['color-basic-500']} width={28} height={28} />
			)}
			<Text style={{ paddingLeft: 12 }}>
				{hasRead ? 'Búin að lesa í dag' : 'Á eftir að lesa í dag'}
			</Text>
		</View>
	);
}

export default HasReadTodayCard;
