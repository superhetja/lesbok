import React, { useState } from 'react';
import { Datepicker, Text } from '@ui-kitten/components';
import { View } from 'react-native';
import { Calendar } from 'react-native-feather';
import {
	useController,
	UseControllerProps,
	useFormContext,
} from 'react-hook-form';
import styles from './styles';

function CalendarIcon() {
	return <Calendar />;
}

interface DatePickerProps extends UseControllerProps {
	defaultValue?: string;
	minDate?: Date;
	maxDate?: Date;
	label: string;
	placeHolder: string;
}

function DatePickerInput({
	name,
	rules,
	defaultValue,
	minDate,
	maxDate,
	label = '',
	placeHolder = '',
}: DatePickerProps) {
	const formContext = useFormContext();
	const [warning, setWarning] = useState('');
	const [hasWarning, setHasWarning] = useState(false);
	const { formState } = formContext;
	const { field } = useController({ name, rules, defaultValue });
	const onSelect = (date: Date) => {
		const validateDate = new Date();
		field.onChange(date);
		if (maxDate) {
			if (date <= new Date(validateDate.setDate(maxDate.getDate() - 8))) {
				setWarning(
					'Kennari fær tilkynningu ef skráð er meira en 7 dagar aftur í tímann',
				);
				setHasWarning(true);
			} else {
				setHasWarning(false);
			}
		}
	};

	return (
		<View style={styles.container}>
			<Datepicker
				style={{ zIndex: 1000 }}
				placeholder={placeHolder}
				date={new Date(field.value)}
				onSelect={date => onSelect(date)}
				accessoryRight={CalendarIcon}
				max={maxDate}
				min={minDate}
			/>
			{hasWarning && <Text status="warning">{warning}</Text>}
		</View>
	);
}

export default DatePickerInput;
