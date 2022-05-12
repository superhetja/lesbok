import { createSelector } from "@reduxjs/toolkit";
import { Layout, Button } from "@ui-kitten/components";
import { useMemo } from "react";
import { SafeAreaView, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useSelector } from "react-redux";
import EntryForm from "../../components/EntryForm/entryForm";
import { HomeTabScreenProps, RootStackParamList, RootStackScreenProps } from "../../navigation";
import { GuardianStackScreenProps } from "../../navigation/types";
import { useCreateEntryForIdMutation, useEditEntryByIdMutation, useGetEntriesQuery, useGetEntryByIdQuery, useGetStudentEntriesQuery } from "../../services/backend";
import { selectCurrentUser } from "../../slices/authSlice";
import { emptyValues, getDateNow } from "../../utils/helpers";
import { BookWithLastPage, EntryResponse, FormDataWithDate } from "../../utils/types";

type EntryFormScreenProps = GuardianStackScreenProps<'EntryForm'>;

const EntryFormScreen = ({route, navigation}: EntryFormScreenProps) => {
	const user = useSelector(selectCurrentUser);
	const isEditing = route.params.entryId !== undefined;


	const entryValues = route.params.entryId ? useGetEntriesQuery(undefined,{
		selectFromResult: ({data}) => {
			const entry = data?.filter(e => e.id === route.params.entryId)[0];
			return entry ? {
				book_name: entry.book.name,
				book_from: parseInt(entry.page_from),
				book_to: parseInt(entry.page_to),
				comment: entry.comment,
				book_id: entry.book.id,
				date_of_entry: entry.date_of_entry, //ATHUGA
			} : emptyValues
				}
	}):  emptyValues

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
		return createSelector(
			(			res: { data?: EntryResponse[]; }) => res.data?? emptyArray,
			(data: EntryResponse[]) => data?.map((entry: EntryResponse):BookWithLastPage => ({...entry.book, 'last_page': entry.page_to}))
				.filter(function(this: Set<string>, {id, name}){
					let key = `${id}`;
					return !this.has(key) && this?.add(key);
			}, set) ?? emptyArray
		);
	}, [entryValues]);

		/**
	 * Gets the latest book for autocomplete on form.
	 */
		 const { books } = useGetEntriesQuery(undefined, {
			selectFromResult: result => ({
				books: selectBooks(result)
			})
		});

		/**
	 * Handles create of Entry
	 * @param entry the form data
	 */
	const handleAddEntry = async (entry: FormDataWithDate) => {
		// TODO: handleERROR
		if(!user) return;

		const obj = {
			book_name: entry.book_name,
			page_from: entry.book_from,
			page_to: entry.book_to,
			student_id: route.params.studentId,
			registered_by: user.id,
			date_of_entry: entry.date_of_entry,
			comment: entry.comment,
			book_id: entry.book_id
		};

		try {
			await addEntry(obj).unwrap();
			navigation.goBack();
			showMessage({
				message: "Færsla hefur verið skráð.",
				type: "success"
			})
		} catch (error) {

			console.log('ERROR');
			console.log(error);
		}
	};

	/**
	 * Handles edit of entry.
	 * @param entry the form data
	 */
	const handleEditEntry = async (entry: FormDataWithDate) => {
		if(!route.params.entryId || !user) return;
		const obj = {
			id: route.params.entryId,
			book_name: entry.book_name,
			page_from: entry.book_from,
			page_to: entry.book_to,
			student_id: route.params.studentId,
			registered_by: user.id,
			date_of_entry: entry.date_of_entry,
			comment: entry.comment,
			book_id: entry.book_id
		};
		try {
			await editEntry(obj).unwrap();
			navigation.goBack();
			showMessage({
				message: "Færslu hefur verið breytt.",
				type: "success"
			})
		} catch {
			console.log('ERROR');
			console.log(editResult);
		}
	};

	return(
		<SafeAreaView>
			<EntryForm
				defaultValues={entryValues}
				submitHandler={isEditing ? handleEditEntry : handleAddEntry}
				submitLabel={isEditing? 'Breyta': 'Skrá'}
				recentBooks={books}
				onCancelHandler={() => navigation.goBack()}
				onCancelLabel='Hætta við'
				/>
		</SafeAreaView>
	)
}

export default EntryFormScreen;
