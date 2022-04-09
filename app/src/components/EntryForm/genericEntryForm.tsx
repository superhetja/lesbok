import { Button, Layout } from "@ui-kitten/components";
import { useEffect, useMemo } from "react";
import { FormProvider, useController, useForm } from "react-hook-form";
import { NumberInput, TextInput, DatePickerInput, AutoTextInput } from "../FormComponents";
import BottomOverlay from "../Overlays/bottomOverlay";
import { Book } from "../../utils/types";
import styles from "./styles";

type FormDataWithDate = {
	book_name: string;
	book_from: number;
	book_to: number;
	comment: string;
	date_of_entry: any;
}

type GenericEntryFormProps = {
	defaultValues: FormDataWithDate;
	submitHandler: (entry: FormDataWithDate) => Promise<void>;
	submitLabel: string;
	isVisible: boolean;
	toggleModal: () => void;
	recentBooks: Book[]
}

const GenericEntryForm = ({defaultValues, submitHandler, submitLabel, isVisible, toggleModal, recentBooks}: GenericEntryFormProps) => {

	const {...methods} = useForm<FormDataWithDate>({
		defaultValues: useMemo(() => {
			return defaultValues;
		}, [defaultValues])
	});

	useEffect(() => {
		methods.reset(defaultValues);
	}, [defaultValues])

	const onSelectedBook = (book) => {
		console.log('setting..')
		methods.setValue('book_from', 8);
	}

	const onSubmit = methods.handleSubmit(async (data) => {
		console.log(defaultValues)
		methods.reset(defaultValues);
		await submitHandler(data);
	});

	const today = new Date();
	return (
		<>

			<BottomOverlay isVisible={isVisible}>
				<Layout style={styles.container}>
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
						/>
						<Layout style={styles.actionWrapper}>
							<Button onPress={onSubmit} >{submitLabel}</Button>
							<Button onPress={toggleModal} >Hætta við</Button>
						</Layout>
					</FormProvider>
				</Layout>
			</BottomOverlay>

		</>
	)
}

export default GenericEntryForm;
