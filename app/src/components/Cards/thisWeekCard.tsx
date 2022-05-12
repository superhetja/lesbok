import { Button } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Star } from 'react-native-feather';
import DonutChart from '../Charts/donutChart';
import Rewards from '../Rewards/Rewards';

type ThisWeekCardProps = {
	readThisWeek: number;
};

function ThisWeekCard({ readThisWeek }: ThisWeekCardProps) {
	const [visible, setVisible] = useState(false);
	const timeOut = () => {
		setVisible(true);
		setTimeout(() => {
			setVisible(false);
		}, 6000);
	};
	return (
		<>
			<DonutChart divident={readThisWeek} />
			{readThisWeek >= 5 && (
				<Button
					// appearance={'ghost'}
					style={{
						width: 10,
						height: 10,
						borderRadius: 50,
						justifyContent: 'center',
					}}
					status="success"
					onPress={() => timeOut()}
					accessoryLeft={() => <Star color="black" />}
				/>
			)}
			{visible && <Rewards />}
		</>
	);
}

export default ThisWeekCard;
