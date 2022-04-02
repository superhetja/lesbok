import React, { useEffect, useState } from 'react';
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
import { entryApi, useCreateEntryForIdMutation, useEditEntryByIdMutation, useGetEntryByIdQuery } from '../../services/backend';
import { TextInput, NumberInput } from '../FormComponents';
import GenericEntryForm from './genericEntryForm';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedEntry, selectedEntryId, selectedEntryValues } from '../../slices/globalSlice';

export type FormData = {
	book_name: string;
	book_from: number;
	book_to: number;
	comment: string;
	date_of_entry: string;
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


const EntryForm = () => {

	const entryValues = useSelector(selectedEntryValues);
	const selectedId = useSelector(selectedEntryId);
	const dispatch = useDispatch();
	useEffect(() => {
		if(selectedId) {
			toggleModal();
		}
	},[selectedId]);

	const [isVisible, setIsVisible] = useState(false);
	const [addEntry, addResult] = useCreateEntryForIdMutation();
	const [editEntry, editResult] = useEditEntryByIdMutation();

	const toggleModal = () => {
		// clear selected values if we are canceling
		if(selectedId && isVisible) {
			dispatch(clearSelectedEntry());
		}
		setIsVisible(!isVisible);
	};

	const handleAddEntry = async (entry: FormData) => {
		const obj = {
			book_name: entry.book_name,
			page_from: entry.book_from,
			page_to: entry.book_to,
			student_id: '123',
			registered_by: 'abc',
			date_of_entry: entry.date_of_entry,
			comment: entry.comment,
		};
		try {
			toggleModal()
			await addEntry(obj).unwrap();
		} catch {

			console.log('ERROR');
			console.log(addResult);
		}
	};

	const handleEditEntry = async (entry: FormData) => {
		const obj = {
			id: selectedId,
			book_name: entry.book_name,
			page_from: entry.book_from,
			page_to: entry.book_to,
			student_id: '123',
			registered_by: 'abc',
			date_of_entry: entry.date_of_entry,
			comment: entry.comment,
		};
		try {
			toggleModal();
			await editEntry(obj).unwrap();
		} catch {
			console.log('ERROR');
			console.log(editResult);
		}
	};

	return (
		<>
			<GenericEntryForm
				defaultValues={{...entryValues, date_of_entry: new Date(entryValues.date_of_entry)}}
				submitHandler={selectedId? handleEditEntry : handleAddEntry}
				submitLabel={selectedId? 'Breyta': 'Skrá'}
				isVisible={isVisible}
				toggleModal={toggleModal}
			/>
			<AddButton onPress={toggleModal} />
		</>
	);
}

export default EntryForm;
