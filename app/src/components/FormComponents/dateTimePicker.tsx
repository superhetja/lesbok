import React, { useState } from "react";
import { UseControllerProps } from "react-hook-form";
import { View, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


interface TimePickerProps extends UseControllerProps {
	mode?: string;
	date?: Date;

}


const DatePicker = ({
	mode = 'time',
}: TimePickerProps) => {

	const [date, setDate] = useState(new Date());
	const [show, setShow] = useState(false);


	return (
		<View>

		{/* <Text>selected: {date.toLocaleString()}</Text> */}
			<DateTimePicker
			testID="dateTimePicker"
			value={date}
			mode={'time'}
			is24Hour={true}
			display={'spinner'}
			minuteInterval={5}
			// onChange={onChange}
			/>
	</View>
);
}

export default DatePicker;
