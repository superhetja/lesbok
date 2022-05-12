import React from 'react';
import {
	useController,
	UseControllerProps,
	useFormContext,
} from 'react-hook-form';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface TimePickerProps extends UseControllerProps {
	mode?: string;
	date?: Date;
}

function TimePicker({ name }: TimePickerProps) {
	const formContext = useFormContext();

	const { field } = useController({ name });

	return (
		<View>
			<DateTimePicker
				testID="dateTimePicker"
				value={field.value}
				mode="time"
				is24Hour
				display="spinner"
				minuteInterval={1}
				onChange={(_, date: Date | undefined) => field.onChange(date)}
			/>
		</View>
	);
}

export default TimePicker;
