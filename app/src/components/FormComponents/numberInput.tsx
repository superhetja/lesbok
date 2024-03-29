import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import {
	useController,
	UseControllerProps,
	useFormContext,
} from 'react-hook-form';
import NumericInput from 'react-native-numeric-input';
import React from 'react';
import styles from './styles';

interface NumericInputProps extends UseControllerProps {
	minVal?: number;
	maxVal?: number;
	errorMessage?: string;
	defaultValue?: number;
	label: string;
}

function ControlledNumberInput({
	name,
	rules,
	minVal,
	maxVal,
	defaultValue = 0,
	label = '',
}: NumericInputProps) {
	// hook will allow us to access the form's context, its methods, and state
	const formContext = useFormContext();
	const { formState } = formContext;

	// establishes the instance of our controlled input and stores its value to the form
	const { field } = useController({ name, rules, defaultValue });

	return (
		<View style={styles.container}>
			{label && <Text category='label'>{label}</Text>}
			<View style={styles.container}>
				<NumericInput
					onChange={field.onChange}
					value={field.value}
					minValue={minVal}
					maxValue={maxVal}
				/>
				{formState.errors && (
					<Text style={styles.error}>{formState?.errors[name]?.message}</Text>
				)}
			</View>
		</View>
	);
}

function NumberInput(props: NumericInputProps) {
	const { name } = props;
	const formContext = useFormContext();

	if (!formContext || !name) {
		const msg = !formContext
			? 'TextInput must be wrapped by the FormProvider'
			: 'Name must be defined';
		console.error(msg);
		return null;
	}

	return <ControlledNumberInput {...props} />;
}

export default NumberInput;
