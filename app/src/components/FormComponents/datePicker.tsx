import React, { LegacyRef, useRef, useState } from 'react';
import { Datepicker, Layout, Icon } from '@ui-kitten/components';
import { Text, View } from 'react-native';
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
	const { formState } = formContext;

	const { field } = useController({ name, rules, defaultValue })
	const datepicker = useRef<Datepicker>();
		console.log(field.value)
	return(
		<View style={styles.container}>
				<Datepicker
				placeholder={placeHolder}
				date={field.value}
				onSelect={field.onChange}
				accessoryRight={CalendarIcon}
				/>
				{formState.errors && (
					<Text style={styles.error}>{formState?.errors[name]?.message}</Text>
				)}
			</View>
			)
		}

export default DatepickerInput;
