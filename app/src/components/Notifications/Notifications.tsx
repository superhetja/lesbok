import { Text } from "@ui-kitten/components"
import { schedulePushNotification } from "../../screens/Notification/notification"
import React from "react";
import { View } from "react-native";
import DatePicker from "../FormComponents/dateTimePicker";
import DateChecker from "../FormComponents/dateChecker";

const SetNotifications = () => {
	const dt = new Date();
	dt.setHours(14, 51)
	console.log(dt)
	schedulePushNotification('Lesbók', 'Ertu að gleyma að lesa?', '', dt, 'Monday')

	return (
		<View>

			<Text>Áminningar</Text>
			<DatePicker name={""}/>
			<DateChecker/>
		</View>
	)
}

export default SetNotifications;
