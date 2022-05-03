import React from "react";
import { useController, UseControllerProps, useForm, useFormContext } from "react-hook-form";
import { View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


interface TimePickerProps extends UseControllerProps {
	mode?: string;
	date?: Date;

}

const TimePicker = ({
	name,

}: TimePickerProps) => {
	const formContext = useFormContext();

	const { field } = useController({name})

	return (
		<View>
			<DateTimePicker
			testID="dateTimePicker"
			value={field.value}
			mode={'time'}
			is24Hour={true}
			display={'spinner'}
			minuteInterval={1}
			onChange={field.onChange}
			/>
	</View>
);
}

export default TimePicker;
