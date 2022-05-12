import React, { LegacyRef, useRef, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Datepicker, Layout, Icon, Text, useTheme } from '@ui-kitten/components';
import {TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Calendar } from 'react-native-feather'
import {
	useController,
	UseControllerProps,
	useFormContext } from 'react-hook-form';

interface DatePickerProps extends UseControllerProps {
	defaultValue?: string;
	minDate?: Date;
	maxDate?: Date;
	label: string
	placeHolder: string;
}


const DatePickerInput = ({
	name,
	rules,
	defaultValue,
	minDate,
	maxDate,
	label='',
	placeHolder=''
	}: DatePickerProps) => {

	const theme = useTheme();
	const formContext = useFormContext();
	const [warning, setWarning] = useState('');
	const [hasWarning, setHasWarning] = useState(false)
	const { formState } = formContext;
	const { field } = useController({ name, rules, defaultValue })

	/**
	 * Handler for date component
	 * @param date
	 */
	const onSelect = (date: Date) => {
		const validateDate = new Date();
		field.onChange(date)
		if (maxDate){
			if (date <= new Date(validateDate.setDate(maxDate.getDate() - 8))) {
				setWarning('Kennari fær tilkynningu ef skráð er meira en 7 dagar aftur í tímann')
				setHasWarning(true)
			}
			else {
				setHasWarning(false)
			}
		}
		}

	return(
		<View style={styles.container}>
			<Text category='label'>{label}</Text>
				<Datepicker
				style={{zIndex: 1000}}
				placeholder={placeHolder}
				date={new Date(field.value)}
				onSelect={date => onSelect(date)}
				accessoryRight={() => <Calendar color={theme['color-primary-default']} />}
				max={maxDate}
				min={minDate}

				/>
				{/* <DateTimePicker
					value={new Date(field.value)}
					onSelect={(e, date) => onSelect(date)}

				/> */}
				{hasWarning && (
					<Text status='warning'>{warning}</Text>
					)}
			</View>
			)
		}

export default DatePickerInput;
