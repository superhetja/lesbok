import React from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';

const Rewards = () => {
	return(
		<ConfettiCannon
			count={200}
			origin={{x: -10, y: 0} }
			fallSpeed={5000}
			fadeOut={true}
			/>
	)
}
export default Rewards;
