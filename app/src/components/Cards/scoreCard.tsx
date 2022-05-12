import React from 'react';
import { Text } from '@ui-kitten/components';
import { View } from 'react-native';

type ScoreCardProps = {
	score: number;
};

function ScoreCard({ score }: ScoreCardProps) {
	return (
		<View style={{ flex: 1 }}>
			<Text category="label">Samtals skráningar:</Text>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontSize: 40 }} category="h1">
					{score}
				</Text>
			</View>
		</View>
	);
}

export default ScoreCard;
