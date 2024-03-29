import { TextInputProps as RNTextInputProps, View, Text } from 'react-native';
import {
	useController,
	UseControllerProps,
	useFormContext,
} from 'react-hook-form';
import React from 'react';
import { Input } from '@ui-kitten/components';
import styles from './styles';

interface TextInputProps extends UseControllerProps, RNTextInputProps {
	placeHolder?: string;
	defaultValue?: string;
	label?: string;
	disabled?: boolean;
}

function ControlledTextInput({
	name,
	placeHolder,
	label,
	rules,
	defaultValue,
	disabled = false,
	...inputProps
}: TextInputProps) {
	const formContext = useFormContext();
	const { formState } = formContext;

	const { field } = useController({
		name,
		rules,
	});

	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<Input
					label={label}
					placeholder={placeHolder}
					style={styles.input}
					onChangeText={field.onChange}
					onBlur={field.onBlur}
					value={field.value}
					disabled={disabled}
					{...inputProps}
				/>
				{formState?.errors && (
					<Text style={styles.error}>{formState?.errors[name]?.message}</Text>
				)}
			</View>
		</View>
	);
}

function TextInput(props: TextInputProps) {
	const { name } = props;

	const formContext = useFormContext();

	/*
		RETURN MESSAGE TO DEVELOPER
		WHEN FORMCONTEXT OR NAME IS MISSING
	*/
	if (!formContext || !name) {
		const msg = !formContext
			? 'TextInput must be wrapped by the FormProvider'
			: 'Name must be defined';
		return null;
	}

	return <ControlledTextInput {...props} />;
}

export default TextInput;
