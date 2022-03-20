import React, { useState } from 'react';
import {
	Text,
	View,
	Button,
	StyleSheet,
	GestureResponderEvent,
} from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import BottomOverlay from '../Overlays/bottomOverlay';
import AddButton from '../Buttons/addButton';
import { useCreateEntryForIdMutation } from '../../services/backend';
import { TextInput, NumberInput } from '../FormComponents';

export type FormData = {
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
		width: '100%',
	},
	container: {
		backgroundColor: '#ffffff',
		padding: 20,
	},
});

export default function EntryForm() {
	const { ...methods } = useForm<FormData>({
		defaultValues: {
			book_name: '',
			book_from: 0,
			book_to: 0,
			comment: '',
		},
	});

	const [isVisible, setIsVisible] = useState(false);
	const [addEntry, result] = useCreateEntryForIdMutation();

	const onSubmit = methods.handleSubmit(async (data) => {
		await handleAddEntry(data);
	});

	const toggleModal = (e: GestureResponderEvent) => {
		setIsVisible(!isVisible);
	};

	const handleAddEntry = async (entry: FormData) => {
		console.log('submit');
		console.log(entry);
		const obj = {
			book_name: entry.book_name,
			page_from: entry.book_from,
			page_to: entry.book_to,
			student_id: '123',
			registered_by: 'abc',
			date_of_entry: "2022-03-19",
		};
		try {
			await addEntry(obj).unwrap();
			// setPost(initialValue)
		} catch {
			console.log('ERROR');
			console.log(result);
		}
	};

	return (
		<>
			<BottomOverlay isVisible={isVisible}>
				<View style={styles.container}>
					<FormProvider {...methods}>
						<TextInput
							// control={control}
							name="book_name"
							placeHolder="Bók"
							rules={{ required: 'This is required message' }}
						/>
						<NumberInput
							name="book_from"
							label="Frá:"
							minVal={0}
							maxVal={9999}
						/>
						<NumberInput
							name="book_to"
							label="Til:"
							minVal={0}
							maxVal={9999}
							rules={{
								validate: () => {
									return (
										methods.getValues('book_from') <=
											methods.getValues('book_to') ||
										'Frá má ekki vera hærra en til'
									);
								},
							}}
						/>
						<TextInput
							// control={control}
							name="comment"
							placeHolder="Athugasemd"
						/>

						<Button title="Skrá" onPress={onSubmit} />
						<Button title="Hætta við" onPress={toggleModal} />
					</FormProvider>
				</View>
			</BottomOverlay>
			<AddButton onPress={toggleModal} />
		</>
	);
}
