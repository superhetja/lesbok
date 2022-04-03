import React, { LegacyRef, useRef, useState } from 'react';
import { Datepicker, Layout, Icon, Text } from '@ui-kitten/components';
import {View } from 'react-native';
import styles from './styles';
import { Calendar } from 'react-native-feather'
import {
	useController,
	UseControllerProps,
	useFormContext } from 'react-hook-form';

const CalendarIcon = () => (
	<Calendar/>
)

interface DatePickerProps extends UseControllerProps {
	defaultValue?: Date;
	minDate?: Date;
	maxDate?: Date;
	label: string
	placeHolder: string;
}


const DatepickerInput = ({
	name,
	rules,
	defaultValue,
	minDate,
	maxDate,
	label='',
	placeHolder=''
	}: DatePickerProps) => {
	const formContext = useFormContext();
	const [warning, setWarning] = useState('');
	const [hasWarning, setHasWarning] = useState(false)
	const { formState } = formContext;
	const { field } = useController({ name, rules, defaultValue })
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
				<Datepicker
				placeholder={placeHolder}
				date={field.value}
				onSelect={date => onSelect(date)}
				accessoryRight={CalendarIcon}
				max={maxDate}
				min={minDate}
				/>
				{hasWarning && (
					<Text status='warning'>{warning}</Text>
				)}
			</View>
			)
		}

export default DatepickerInput;
