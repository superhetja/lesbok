import { Layout, Button, Text, IndexPath } from "@ui-kitten/components"
import { schedulePushNotification } from "../../screens/Notification/notification"
import React from "react";
import DateChecker from "../FormComponents/dateChecker";
import { FormProvider, useForm } from "react-hook-form";
import TimePicker from "../FormComponents/timePicker";
import { NotificationData } from "../../utils/types";
import { DAYS } from "../../utils/constants";

type SetNotificationsProps = {
	onSubmitCallback: () => void
}

const SetNotifications = ({onSubmitCallback}: SetNotificationsProps) => {

	const {...methods} = useForm<NotificationData>({
		defaultValues: {
			time: new Date(),
			days: [
				new IndexPath(0, 0),
				new IndexPath(1, 0),
				new IndexPath(2, 0),
				new IndexPath(3, 0),
				new IndexPath(4, 0),
				new IndexPath(5, 0),
				new IndexPath(6, 0),
			]
		}
	})


	const onSubmit = methods.handleSubmit(async(data) => {
			data.days.forEach(async (index) => {
				await schedulePushNotification('Lesbók', 'Ertu að gleyma að lesa?', '', data.time, DAYS[index.row])
			})
			onSubmitCallback();
		})

	return (
		<Layout style={{padding: 10}}>
			<FormProvider {...methods}>
					<Text category='s1'>Tími:</Text>
					<TimePicker
						name="time"
					/>
					<Text category='s1'>Dagar:</Text>
					<DateChecker
						name="days"
					/>
				<Button onPress={onSubmit}>Setja áminningar</Button>
			</FormProvider>
		</Layout>
	)
}

export default SetNotifications;
