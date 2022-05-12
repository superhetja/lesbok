import { Layout, Button, Text } from '@ui-kitten/components';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { schedulePushNotification } from '../../utils/notification';
import DateChecker from '../FormComponents/dateChecker';
import TimePicker from '../FormComponents/timePicker';
import { NotificationData } from '../../utils/types';
import { DAYS } from '../../utils/constants';

type SetNotificationsProps = {
	onSubmitCallback: () => void;
};

function SetNotifications({ onSubmitCallback }: SetNotificationsProps) {
	const { ...methods } = useForm<NotificationData>({
		defaultValues: {
			time: new Date(),
			days: [true, true, true, true, true, true, true],
		},
	});

	const onSubmit = methods.handleSubmit(async data => {
		data.days.forEach(async (value, index) => {
			if (value) {
				await schedulePushNotification(
					'Lesbók',
					'Ertu að gleyma að lesa?',
					'',
					data.time,
					DAYS[index],
				);
			}
		});
		showMessage({
			message: 'Áminning hefur verið skráð',
			type: 'success',
		});
		onSubmitCallback();
	});

	return (
		<Layout style={{ padding: 10 }}>
			<FormProvider {...methods}>
				<Text category="s1">Tími:</Text>
				<TimePicker name="time" />
				<Text category="s1">Dagar:</Text>
				<DateChecker name="days" />
				<Button onPress={onSubmit}>Setja áminningar</Button>
			</FormProvider>
		</Layout>
	);
}

export default SetNotifications;
