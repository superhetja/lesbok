import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, GestureResponderEvent } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import BottomOverlay from '../Overlays/bottomOverlay';
import AddButton from '../Buttons/addButton';
import NumericInput from 'react-native-numeric-input';
import { isWhiteSpaceLike } from 'typescript';
import { useCreateEntryForIdMutation } from '../../services/backend';

type FormData = {
	book_name: string;
	book_from: number;
	book_to: number;
	comment: string;
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		width: '100%'
	},
	container: {
		backgroundColor: '#ffffff',
		padding: 20
	}
});

export default function EntryForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			book_name: '',
			book_from: undefined,
			book_to: undefined,
			comment: '',
		},
	});

	const [isVisible, setIsVisible] = useState(false);
	const [addEntry, result] = useCreateEntryForIdMutation();

	const onSubmit = handleSubmit((data) => {
		handleAddEntry(data)
	});

	const toggleModal = (e: GestureResponderEvent) => {
		setIsVisible(!isVisible);
	}

	const handleAddEntry = async (entry: FormData) => {
    try {
      await addEntry(entry).unwrap()
      // setPost(initialValue)
    } catch {
      console.log('ERROR')
			console.log(result)
    }
  }

	return (
		<>
		<BottomOverlay isVisible={isVisible}>
			<View style={styles.container}>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
						style={styles.input}
						onBlur={onBlur}
						onChangeText={onChange}
						placeholder="Nafn bókar"
						value={value}
						/>
						)}
						name="book_name"
						/>
				{errors.book_name && <Text>This is required.</Text>}

				<Controller
					control={control}
					rules={{
						maxLength: 3,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<NumericInput
							onChange={onChange}
							value={value}
						/>
						)}
						name="book_from"
						/>
				<Controller
					control={control}
					rules={{
						maxLength: 3,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<NumericInput
							onChange={onChange}
							value={value}
							minValue={0}
						/>
						// <TextInput
						// style={styles.input}
						// onBlur={onBlur}
						// onChangeText={onChange}
						// value={value}
						// />
						)}
						name="book_to"
						/>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
						style={styles.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder="Athugasemd"
						/>
						)}
						name="comment"
						/>

				<Button title="Skrá" onPress={onSubmit} />
				<Button title="Hætta við" onPress={toggleModal} />
			</View>
		</BottomOverlay>
		<AddButton onPress={toggleModal} />
		</>
	);
}
