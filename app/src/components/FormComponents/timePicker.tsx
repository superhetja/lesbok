import React from "react";
import { UseControllerProps } from "react-hook-form";
import { View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


interface TimePickerProps extends UseControllerProps {
	mode?: string;
	date?: Date;
	setDate: Date;
	updateDate: (arg: Date) => void

}


const TimePicker = ({
	name,
	setDate,
	updateDate,

}: TimePickerProps) => {
	const onChange = (e: any, date: any) => {
		updateDate(date)


}
	return (
		<View>
			<DateTimePicker
			testID="dateTimePicker"
			value={setDate}
			mode={'time'}
			is24Hour={true}
			display={'spinner'}
			minuteInterval={5}
			onChange={onChange}
			/>
	</View>
);
}

export default TimePicker;
