import { Button, Layout } from "@ui-kitten/components";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { NumberInput, TextInput, DatePickerInput, AutoTextInput } from "../FormComponents";
import { BookWithLastPage, FormDataWithDate } from "../../utils/types";
import styles from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { emptyValues } from "../../utils/helpers";


// import {keyboardSize} from '../../utils/keyboardSize/keyboardSize'




type GenericEntryFormProps = {
	defaultValues: FormDataWithDate;
	submitHandler: (entry: FormDataWithDate) => Promise<void>;
	submitLabel: string;
	recentBooks: BookWithLastPage[]
	onCancelLabel?: string;
	onCancelHandler: () => void
}

const EntryForm = ({
	defaultValues,
	submitHandler,
	submitLabel,
	recentBooks,
	onCancelHandler,
	onCancelLabel,
}: GenericEntryFormProps) => {

	const {...methods} = useForm<FormDataWithDate>({
		defaultValues: useMemo(() => {
			return defaultValues;
		}, [defaultValues])
	});

	const [entryDate, setEntryDate] = useState(new Date(defaultValues.date_of_entry));


	/**
	 * Reset the form values if defaultValues changes
	 */
	useEffect(() => {
		methods.reset(defaultValues);
	}, [defaultValues])

	/**
	 * Sets the from value to last entry of the read book + 1 and from value to + 2
	 *
	 * @param book The selected book object
	 */
	const onSelectedBook = (book: BookWithLastPage) => {
		methods.setValue('book_from', parseInt(book.last_page) + 1);
		methods.setValue('book_to', parseInt(book.last_page) + 2);
		methods.setValue('book_id', book.id);
	}

	const onCancel = () => {
		methods.reset(defaultValues);
		onCancelHandler();
	}

	/**
	 * Handle the submit of the book entry.
	 * Resets the form data and sends the data to submitHandler
	 *
	 * @param data the form data
	 */
	const onSubmit = methods.handleSubmit(async (data) => {
		methods.reset(defaultValues);
		await submitHandler(data)
	});

	const today = new Date();
	return (
		<>
			<Layout style={{...styles.container}}>
					<KeyboardAwareScrollView>

					<FormProvider {...methods}>
							<AutoTextInput
							name="book_name"
							label="Bók"
							placeHolder="Skráðu nafn bókar"
							rules={{ required: 'Verður að fylla út'}}
							list={recentBooks}
							onSelectCallbackFn={onSelectedBook}
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
						<DatePickerInput
							name="date_of_entry"
							label="Dagsetning:"
							placeHolder="Veldu dagsetningu"
							maxDate={today}
							/>
						<TextInput
							name="comment"
							label="Athugasemd"
							// onPress={setKeyboardSize(useKeyboardSize)}
							multiline={true}
							/>
						<Layout style={styles.actionWrapper}>
							<Button onPress={onSubmit} >{submitLabel}</Button>
							<Button onPress={onCancel} status='basic'>{onCancelLabel}</Button>
						</Layout>
					</FormProvider>
						</KeyboardAwareScrollView>
				</Layout>

		</>
	)
}

export default EntryForm;
