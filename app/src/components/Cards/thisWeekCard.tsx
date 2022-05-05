import { Button, Text } from "@ui-kitten/components";
import React, {useState} from "react";
import { View } from "react-native"
import ScoreCard from "./scoreCard";
import DonutChart from '../Charts/donutChart'
import Rewards from "../Rewards/Rewards";
import { Star } from "react-native-feather";

type ThisWeekCardProps = {
	readThisWeek: number;
}

const ThisWeekCard = ({readThisWeek}: ThisWeekCardProps) => {
	readThisWeek = 5;
	const [visible, setVisible] = useState(false)
	const timeOut = () => {
		setVisible(true);
		setTimeout(() => {
			setVisible(false)
		}, 6000)}
	return (
		<>
			<DonutChart divident={readThisWeek}/>
			{
				readThisWeek === 5 &&
				<Button
					// appearance={'ghost'}
					style={{width: 10, height: 10, borderRadius: 50, justifyContent: 'center'}}
					status={'success'}
					onPress={() => timeOut()}
					accessoryLeft={() => (<Star color={'black'} />)} />
			}
			{
					visible &&
					<Rewards/>
			}
			</>
	)
}

export default ThisWeekCard;
