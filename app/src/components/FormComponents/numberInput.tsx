import { Text, View } from 'react-native';
import { useController, UseControllerProps, useFormContext } from 'react-hook-form';
import NumericInput from 'react-native-numeric-input';
import styles from './styles';


interface NumericInputProps extends UseControllerProps {
	minVal?: number;
	maxVal?: number;
	errorMessage?: string;
	defaultValue?: number;
	label: string;
}

const ControlledNumberInput = ({
	name,
	rules,
	minVal,
	maxVal,
	errorMessage,
	defaultValue=0,
	label = ''
}: NumericInputProps ) => {
	//hook will allow us to access the form's context, its methods, and state
	const formContext = useFormContext();
	const { formState } = formContext;

	// establishes the instance of our controlled input and stores its value to the form
	const { field } = useController({ name, rules, defaultValue});

	return (
		<View style={styles.container}>
			{ label && (<Text style={styles.label}>{label}</Text>)}
			<View style={styles.container}>
				<NumericInput
					onChange={field.onChange}
					value={field.value}
					minValue={minVal}
				/>
				{formState.errors && <Text style={styles.error}>Til má ekki vera hærri en frá</Text>}
			</View>
		</View>
	)
}

const NumberInput = (props: NumericInputProps) => {
	const { name } = props;

	const formContext = useFormContext();

	if(!formContext || !name) {
		const msg = !formContext ? "TextInput must be wrapped by the FormProvider" : "Name must be defined"
		console.error(msg)
		return null
	}

	return (
		<ControlledNumberInput {...props} />
	);
};

export default NumberInput;
