import { StyleSheet, TextInput as Input } from 'react-native';
import { Control, useController } from 'react-hook-form';
import { FormData } from '../EntryForm';
const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		width: '100%',
	},
	container: {
		backgroundColor: '#ffffff',
		padding: 20,
	},
});

type textInputProps = {
	//Control <FormData, any>
	control: Control<FormData, any>;
	name: 'book_name' | 'comment';
	placeHolder?: string;
	rules?: {};
	errorMessage?: string;
};

const TextInput = ({
	control,
	name,
	placeHolder,
	rules,
	errorMessage,
}: textInputProps) => {
	const { field } = useController({
		control,
		defaultValue: '',
		name,
		rules: rules,
	});
	return (
		<>
			<Input
				style={styles.input}
				onBlur={field.onBlur}
				onChangeText={field.onChange}
				placeholder={placeHolder}
				value={field.value}
			/>
		</>
	);
};

export default TextInput;
