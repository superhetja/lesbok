import { StyleSheet, TextInput as RNTextInput, View, Text } from 'react-native';
import {
	useController,
	UseControllerProps,
	useFormContext,
} from 'react-hook-form';
import styles from './styles';

interface TextInputProps extends UseControllerProps {
	placeHolder?: string;
	defaultValue?: string;
}

const ControlledTextInput = ({
	name,
	placeHolder,
	rules,
	defaultValue,
	...inputProps
}: TextInputProps) => {
	const formContext = useFormContext();
	const { formState } = formContext;

	const { field } = useController({ name, rules });
	return (
		<View style={styles.container}>
			{placeHolder && <Text style={styles.label}>{placeHolder}</Text>}
			<View style={styles.container}>
				<RNTextInput
					style={styles.input}
					onChangeText={field.onChange}
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
