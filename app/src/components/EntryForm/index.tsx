import React, { useEffect, useMemo } from 'react';
import { useCreateEntryForIdMutation, useEditEntryByIdMutation, useGetEntriesQuery } from '../../services/backend';
import GenericEntryForm from './genericEntryForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectedEntryValues, updateForm } from '../../slices/globalSlice';
import { createSelector } from '@reduxjs/toolkit';
import { Book, EntryResponse } from '../../utils/types';

export type FormData = {
	book_name: string;
	book_from: number;
	book_to: number;
	comment: string;
	date_of_entry: string;
	book_id?: string;
};

type EntryFormProps = {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	selectedId: string;
	toggleModal: () => void;
}

const EntryForm = ({isVisible, setIsVisible, selectedId, toggleModal}: EntryFormProps) => {

	const entryValues = useSelector(selectedEntryValues);
	const dispatch = useDispatch();
	useEffect(() => {
		if(selectedId) {
			toggleModal();
		}
	},[selectedId]);

	const [addEntry, addResult] = useCreateEntryForIdMutation();
	const [editEntry, editResult] = useEditEntryByIdMutation();


	const selectBooks = useMemo(() => {
		const emptyArray: never[] = []
		const set = new Set<string>();
		// Return a unique selector instance for this page so that
    // the filtered results are correctly memoized
		console.log('inside useMemo')
		return createSelector(
			(			res: { data?: EntryResponse[]; }) => res.data?? emptyArray,
			(data: EntryResponse[]) => data?.map((entry: EntryResponse) => entry.book)
				.filter(function({id, name}){
					let key = `${id}`;
					return !this.has(key) && this?.add(key);
			}, set) ?? emptyArray
		);
	}, []);

	const { books } = useGetEntriesQuery(undefined, {
		selectFromResult: result => ({
			books: selectBooks(result)
		})
	})

	console.log(books)

	// const { books } = useGetEntriesQuery(undefined, {
	// 	selectFromResult: ({data}) => ({
	// 		books: data?.map(b => (b.book))
	// 			.filter(({id, title}) => {
	// 			var key = `${id}`;
	// 			return this?? && !this.has(key) && this?.add(key);
	// 		}, new Set<string>())
	// 	})
	// })

	/**
	 * Sets the from value to last entry of the read book + 1 and from value to + 2
	 *
	 * @param book The selected book object
	 */
	const handleSelectedBook = async (book: Book) => {
		const data = {
			...entryValues,
			book_name: book.name,
			book_id: book.id,
			book_from: 3,
			book_to: 4,
		}
		dispatch(updateForm({formData: data}))
	}

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
				recentBooks={books}
			/>
		</>
	);
}

export default EntryForm;
