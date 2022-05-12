import React from 'react';
import { Text } from '@ui-kitten/components';
import { View } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

type DonutChartProps = {
	divident: number;
	divisor?: number;
};

function DonutChart({ divident, divisor = 5 }: DonutChartProps) {
	return (
		<>
			<Text category="label" style={{ paddingBottom: 10 }}>
				Lestur vikunnar:
			</Text>
			<View style={{ position: 'relative', flex: 1 }}>
				<View
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text category="h3">
						{divident}/{divisor}
					</Text>
				</View>
				<ProgressCircle
					style={{ flex: 1 }}
					progress={divident / divisor}
					progressColor="rgb(134, 65, 244)"
					strokeWidth={10}
				/>
			</View>
		</>
	);
}

export default DonutChart;
