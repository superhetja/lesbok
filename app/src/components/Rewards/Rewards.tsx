import React from 'react';
import { View } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

function Rewards() {
	return (
		<View>
			<ConfettiCannon
				count={200}
				origin={{ x: -10, y: 0 }}
				fallSpeed={5000}
				fadeOut
				autoStart
			/>
		</View>
	);
}
export default Rewards;
