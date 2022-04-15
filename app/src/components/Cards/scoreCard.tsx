import { Text } from "@ui-kitten/components";
import { View } from "react-native"

type ScoreCardProps = {
	score: number;
}

const ScoreCard = ({score}: ScoreCardProps) => {
	return (

		<View style={{flex: 1}}>
			<Text>Einkunn:</Text>
			<View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
				<Text style={{fontSize: 54}} category='h1'>{score}%</Text>
			</View>
		</View>
	)
}

export default ScoreCard;
