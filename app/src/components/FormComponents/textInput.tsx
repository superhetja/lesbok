import { StyleSheet, TextInput as RNTextInput, View, Text } from 'react-native';
import {
	useController,
	UseControllerProps,
	useFormContext,
} from 'react-hook-form';
import styles from './styles';
import { useMemo } from 'react';
import { Input } from '@ui-kitten/components';

interface TextInputProps extends UseControllerProps {
	placeHolder?: string;
	defaultValue?: string;
	autoComplete?: boolean;
}

const ControlledTextInput = ({
	name,
	placeHolder,
	rules,
	autoComplete = false,
	defaultValue,
	...inputProps
}: TextInputProps) => {
	const formContext = useFormContext();
	const { formState } = formContext;

	const { field } = useController({
		name,
		rules,
		// defaultValue: useMemo(() => {
		// 	console.log('Textinput')
		// 	console.log(defaultValue)
		// 	return defaultValue;
		// }, [defaultValue])
	});
	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<Input
					label={placeHolder}
					style={styles.input}
					onChangeText={!autoComplete? field.onChange : (text) => field.onChange({ query: text})}
					onBlur={field.onBlur}
					value={field.value}
					{...inputProps}
				/>
				{formState?.errors && (
					<Text style={styles.error}>{formState?.errors[name]?.message}</Text>
				)}
			</View>
		</View>
	);
};

const TextInput = (props: TextInputProps) => {
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
};

export default TextInput;
