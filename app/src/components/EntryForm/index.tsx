import React, { useEffect } from 'react';
import {
	StyleSheet,
} from 'react-native';
import { useCreateEntryForIdMutation, useEditEntryByIdMutation } from '../../services/backend';
import GenericEntryForm from './genericEntryForm';
import { useSelector } from 'react-redux';
import { selectedEntryValues } from '../../slices/globalSlice';
import { getDateNow } from '../../utils/helpers';

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

type EntryFormProps = {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	selectedId: string;
	toggleModal: () => void;
}

const EntryForm = ({isVisible, setIsVisible, selectedId, toggleModal}: EntryFormProps) => {

	const entryValues = useSelector(selectedEntryValues);
	useEffect(() => {
		if(selectedId) {
			toggleModal();
		}
	},[selectedId]);

	const [addEntry, addResult] = useCreateEntryForIdMutation();
	const [editEntry, editResult] = useEditEntryByIdMutation();


	const handleAddEntry = async (entry: FormData) => {
		const obj = {
			book_name: entry.book_name,
			page_from: entry.book_from,
			page_to: entry.book_to,
			student_id: '123',
			registered_by: 'abc',
			date_of_entry: getDateNow(),
			comment: entry.comment,
		};
		try {
			toggleModal()
			await addEntry(obj).unwrap();
			// setPost(initialValue)
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
			date_of_entry: getDateNow(),
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
				defaultValues={entryValues}
				submitHandler={selectedId? handleEditEntry : handleAddEntry}
				submitLabel={selectedId? 'Breyta': 'Skrá'}
				isVisible={isVisible}
				toggleModal={toggleModal}
			/>
		</>
	);
}

export default EntryForm;
