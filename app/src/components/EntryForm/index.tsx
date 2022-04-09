import React, { useEffect, useMemo } from 'react';
import { useCreateEntryForIdMutation, useEditEntryByIdMutation, useGetEntriesQuery } from '../../services/backend';
import GenericEntryForm from './genericEntryForm';
import { useSelector } from 'react-redux';
import { selectedEntryValues } from '../../slices/globalSlice';
import { createSelector } from '@reduxjs/toolkit';
import { BookWithLastPage, EntryResponse, FormDataWithDate } from '../../utils/types';
import { showMessage } from 'react-native-flash-message';
import { Set } from 'typescript';

type EntryFormProps = {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	selectedId: string;
	toggleModal: () => void;
}

const EntryForm = ({isVisible, setIsVisible, selectedId, toggleModal}: EntryFormProps) => {

	const entryValues = useSelector(selectedEntryValues);

	/**
	 * Open the form if we select a entry.
	 */
	useEffect(() => {
		if(selectedId) {
			toggleModal();
		}
	},[selectedId]);

	const [addEntry, addResult] = useCreateEntryForIdMutation();
	const [editEntry, editResult] = useEditEntryByIdMutation();


	/**
	 * Selector for selecting unique book names with last page attached.
	 */
	const selectBooks = useMemo(() => {
		const emptyArray: never[] = []
		const set = new Set<string>();
		// Return a unique selector instance for this page so that
    // the filtered results are correctly memoized
		console.log('inside useMemo')
		return createSelector(
			(			res: { data?: EntryResponse[]; }) => res.data?? emptyArray,
			(data: EntryResponse[]) => data?.map((entry: EntryResponse):BookWithLastPage => ({...entry.book, 'last_page': entry.page_to}))
				.filter(function(this: Set<string>, {id, name}){
					let key = `${id}`;
					return !this.has(key) && this?.add(key);
			}, set) ?? emptyArray
		);
	}, [toggleModal]);

	/**
	 * Gets the latest book for autocomplete on form.
	 */
	const { books } = useGetEntriesQuery(undefined, {
		selectFromResult: result => ({
			books: selectBooks(result)
		})
	});

	console.log(books)


	/**
	 * Handles create of Entry
	 * @param entry the form data
	 */
	const handleAddEntry = async (entry: FormDataWithDate) => {
		const obj = {
			book_name: entry.book_name,
			page_from: entry.book_from,
			page_to: entry.book_to,
			student_id: '123',
			registered_by: 'abc',
			date_of_entry: entry.date_of_entry,
			comment: entry.comment,
			book_id: entry.book_id
		};

		try {
			toggleModal()
			await addEntry(obj).unwrap();
		} catch {

			console.log('ERROR');
			console.log(addResult);
		}
	};

	/**
	 * Handles edit of entry.
	 * @param entry the form data
	 */
	const handleEditEntry = async (entry: FormDataWithDate) => {
		const obj = {
			id: selectedId,
			book_name: entry.book_name,
			page_from: entry.book_from,
			page_to: entry.book_to,
			student_id: '123',
			registered_by: 'abc',
			date_of_entry: entry.date_of_entry,
			comment: entry.comment,
			book_id: entry.book_id
		};
		try {
			toggleModal();
			await editEntry(obj).unwrap();
			showMessage({
				message: "Bók skráð.",
				type: "success"
			})
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
				recentBooks={books}
			/>
		</>
	);
}

export default EntryForm;
