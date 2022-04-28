import { Layout, Text } from "@ui-kitten/components"
import { schedulePushNotification } from "../../screens/Notification/notification"
import React, { useState } from "react";
import DateChecker from "../FormComponents/dateChecker";
import { FormProvider, useForm } from "react-hook-form";
import TimePicker from "../FormComponents/timePicker";
import { NotificationData } from "../../utils/types";
import { Button } from "react-native-elements";

const SetNotifications = () => {
	const [time, setTime] = useState(new Date())
	const [monday, setMonday] = useState(true);
  const [tuesday, setTuesday] = useState(true);
	const [wednsday, setWednsday] = useState(true);
	const [thursday, setThursday] = useState(true);
	const [friday, setFriday] = useState(true);
	const [saturday, setSaturday] = useState(true);
	const [sunday, setSunday] = useState(true);

	const dt = new Date();
	dt.setHours(13, 33)
	console.log(dt)
	console.log(time)
	schedulePushNotification('Lesbók', 'Ertu að gleyma að lesa?', '', dt, 'Thursday')
	const {...methods} = useForm<NotificationData>()

	const updateTime = (updateTime: Date): void => {
		setTime(updateTime)
	}
	const updateMonday = (arg: boolean): void => {
		setMonday(arg)
	}
	const updateTuesday = (arg: boolean): void => {
		setTuesday(arg)
	}
	const updateWednsday = (arg: boolean): void => {
		setWednsday(arg)
	}
	const updateThursday = (arg: boolean): void => {
		setThursday(arg)
	}
	const updateFriday = (arg: boolean): void => {
		setFriday(arg)
	}
	const updateSaturday = (arg: boolean): void => {
		setSaturday(arg)
	}
	const updateSunday = (arg: boolean): void => {
		setSunday(arg)
	}

	const onSubmit = () => {
		if (monday === true) {
			schedulePushNotification('Lesbók', 'Ertu að gleyma að lesa?', '', time, 'Monday')
		}
		if (tuesday === true) {
			schedulePushNotification('Lesbók', 'Ertu að gleyma að lesa?', '', time, 'Tuesday')
		}
		if (wednsday === true) {
			schedulePushNotification('Lesbók', 'Ertu að gleyma að lesa?', '', time, 'Wednesday')
		}
		if (thursday === true) {
			schedulePushNotification('Lesbók', 'Ertu að gleyma að lesa?', '', time, 'Thursday')
		}
		if (friday === true) {
			schedulePushNotification('Lesbók', 'Ertu að gleyma að lesa?', '', time, 'Friday')
		}
		if (saturday === true) {
			schedulePushNotification('Lesbók', 'Ertu að gleyma að lesa?', '', time, 'Saturday')
		}
		if (sunday === true) {
			schedulePushNotification('Lesbók', 'Ertu að gleyma að lesa?', '', time, 'Sunday')
		}
	}

	return (
		<Layout>

		<FormProvider {...methods}>
				<Text>Áminningar</Text>
				<TimePicker
					name={"time"}
					setDate={time}
					updateDate={updateTime}
				/>
				<DateChecker
					name="dates"
					monday={monday}
					tuesday={tuesday}
					wednsday={wednsday}
					thursday={thursday}
					friday={friday}
					saturday={saturday}
					sunday={sunday}
					setMonday={updateMonday}
					setTuesday={updateTuesday}
					setWednsday={updateWednsday}
					setThursday={updateThursday}
					setFriday={updateFriday}
					setSaturday={updateSaturday}
					setSunday={updateSunday}

				/>
		</FormProvider>
			<Button style={{height:10}} onPress={onSubmit}>Setja áminningar</Button>
		</Layout>

	)
}

export default SetNotifications;
