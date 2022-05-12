/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { Keyboard, KeyboardEventName, Platform, View } from 'react-native';
import { Autocomplete, AutocompleteItem, Text } from '@ui-kitten/components';
import {
	UseControllerProps,
	useFormContext,
	useController,
} from 'react-hook-form';
import styles from './styles';
import { Book, BookWithLastPage } from '../../utils/types';

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
	list: BookWithLastPage[];
	onSelectCallbackFn?: (book: BookWithLastPage) => void;
}

function AutoControlledTextInput({
	name,
	list,
	placeHolder,
	rules,
	defaultValue,
	label,
	onSelectCallbackFn,
	...inputProps
}: AutoTextInputProps) {
	const formContext = useFormContext();
	const { formState } = formContext;

	const { field } = useController({ name, rules });

	const filter = (item: Book, query: string) =>
		item.name.toLowerCase().includes(query.toLowerCase());
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

	const onSelect = (index: any) => {
		onSelectCallbackFn && onSelectCallbackFn(data[index]);
		field.onChange(data[index].name);
	};

	const onChangeText = (query: string) => {
		field.onChange(query);
		setData(list.filter(item => filter(item, query)));
	};

	const renderOption = (item: Book, index: number) => (
		<AutocompleteItem key={index} title={item.name} />
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
				onSelect={onSelect}
			>
				{data.map(renderOption)}
			</Autocomplete>
			{formState?.errors && (
				<Text style={styles.error}>{formState?.errors[name]?.message}</Text>
			)}
		</View>
	);
}

function AutoTextInput(props: AutoTextInputProps) {
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
}

export default AutoTextInput;
