import { StyleSheet, TextInput as RNTextInput, View, Text } from 'react-native';
import { Control, FieldName, FieldValues, useController, UseControllerProps, useFormContext } from 'react-hook-form';
import { FormData } from '../EntryForm';
import styles from './styles';


interface TextInputProps extends UseControllerProps {
	//Control <FormData, any>
	// control: Control<FieldValues, any>;
	// name: FieldName<FieldValues>;
	placeHolder?: string;
	// rules?: {};
	errorMessage?: string;
	defaultValue?: string;
};

const ControlledTextInput = ({
	name,
	placeHolder,
	rules,
	defaultValue,
	...inputProps
}: TextInputProps) => {

  const formContext = useFormContext();
  const { formState } = formContext;

  const { field } = useController({ name, rules, defaultValue });

  return (

  <View style={styles.container}>
	  {placeHolder && (<Text style={styles.label}>{placeHolder}</Text>)}
		<View style={styles.container}>
	    <RNTextInput
	      style={styles.input}
				onChangeText={field.onChange}
				onBlur={field.onBlur}
				value={field.value}
	      {...inputProps}
	    />
	  </View>
	</View>

  );
}


const TextInput = (props: TextInputProps) => {
	const { name } = props;

	const formContext = useFormContext();

	/*
		RETURN MESSAGE TO DEVELOPER
		WHEN FORMCONTEXT OR NAME IS MISSING
	*/
	if (!formContext || !name) {
		const msg = !formContext ? "TextInput must be wrapped by the FormProvider" : "Name must be defined"
		console.error(msg)
		return null
	}

	return (
		<ControlledTextInput {...props}/>
	);
};

export default TextInput;
