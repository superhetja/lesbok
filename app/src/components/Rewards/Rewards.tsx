import React from 'react';
import { View } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const Rewards = () => {
	return(
		<View>

		<ConfettiCannon
			count={200}
			origin={{x: -10, y: 0} }
			fallSpeed={5000}
			fadeOut={true}
			autoStart={true}
			/>
			</View>
	)
}
export default Rewards;
