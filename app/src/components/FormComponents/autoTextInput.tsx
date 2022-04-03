import React, { useState, useEffect } from 'react';
import { Keyboard, KeyboardEventName, Platform, View } from 'react-native';
import { Autocomplete, AutocompleteItem, Text } from '@ui-kitten/components';
import { useGetEntriesQuery } from '../../services/backend';
import styles from './styles';
import { UseControllerProps, useFormContext, useController } from 'react-hook-form';

const showEvent: KeyboardEventName = Platform.select({
	android: 'keyboardDidShow',
  default: 'keyboardWillShow',
});

const hideEvent: KeyboardEventName = Platform.select({
	android: 'keyboardDidHide',
  default: 'keyboardWillHide',
});

interface AutoTextInputProps extends UseControllerProps {
	placeHolder?: string;
	defaultValue?: string;
	label?: string;
	list: {
		title: string;
	}[];
}

const AutoControlledTextInput = ({
	name,
	list,
	placeHolder,
	rules,
	defaultValue,
	label,
	...inputProps
}: AutoTextInputProps) => {
	const formContext = useFormContext();
	const { formState } = formContext;

	const { field } = useController({name, rules});
	const filter = (item: {title: string}, query: string) => item.title.toLowerCase().includes(query.toLowerCase());
  const [value, setValue] = useState('');
  const [data, setData] = useState(list);
  const [placement, setPlacement] = useState('bottom');

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(showEvent, () => {
      setPlacement('top');
    });

    const keyboardHideListener = Keyboard.addListener(hideEvent, () => {
      setPlacement('bottom');
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  });

  const onSelect = (index : any) => {
    setValue(list[index].title);
		field.onChange(list[index].title)

  };

  const onChangeText = (query: string) => {
		field.onChange(query)
    setValue(query);
    setData(list.filter(item => filter(item, query)));

  };

  const renderOption = (item: {title: string}, index: number) => (
    <AutocompleteItem
      key={index}
      title={item.title}
    />
  );

  return (
		<View style={styles.container}>
			<Autocomplete
				label={label}
				placeholder={placeHolder}
				value={field.value}
				placement={placement}
				onChangeText={onChangeText}
				onBlur={field.onBlur}
				onSelect={onSelect}>
				{data.map(renderOption)}

			</Autocomplete>
			{formState?.errors && (
					<Text style={styles.error}>{formState?.errors[name]?.message}</Text>
				)}
		</View>
  );
};

const AutoTextInput = (props: AutoTextInputProps) => {
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

	return <AutoControlledTextInput {...props} />;
};


export default AutoTextInput;
