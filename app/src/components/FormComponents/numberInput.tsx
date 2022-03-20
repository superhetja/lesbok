import { StyleSheet } from 'react-native';
import { Control, useController } from 'react-hook-form';
import NumericInput from 'react-native-numeric-input';
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
type numericInputProps = {
	control: Control<FormData, any>;
	name: 'book_from' | 'book_to';
	minVal?: number;
	maxVal?: number;
	rules?: {};
	errorMessage?: string;
};
const numberInput = ({
	control,
	name,
	rules,
	minVal,
	maxVal,
	errorMessage,
}: numericInputProps) => {
	const { field } = useController({
		control,
		defaultValue: 0,
		name,
		rules: rules,
	});
	return (
		<>
			<NumericInput
				onChange={field.onChange}
				value={field.value}
				minValue={minVal}
			/>
		</>
		// <NumericInput onChange={onChange} value={value} minValue={0} />
		// <TextInput
		// style={styles.input}
		// onBlur={onBlur}
		// onChangeText={onChange}
		// value={value}
		// />
	);
};

export default numberInput;
