import { Button, Datepicker, Layout } from "@ui-kitten/components";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { FormData } from ".";
import { NumberInput, TextInput } from "../FormComponents";
import DatepickerInput from "../FormComponents/datePicker";
import BottomOverlay from "../Overlays/bottomOverlay";


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
	actionWrapper: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		alignItems: 'center'
	}
});

type formDataWithDate = {
	book_name: string;
	book_from: number;
	book_to: number;
	comment: string;
	date_of_entry: Date;
}

type GenericEntryFormProps = {
	defaultValues: formDataWithDate;
	submitHandler: (entry: FormData) => Promise<void>;
	submitLabel: string;
	isVisible: boolean;
	toggleModal: () => void;
}

const GenericEntryForm = ({defaultValues, submitHandler, submitLabel, isVisible, toggleModal}: GenericEntryFormProps) => {
	// const [isVisible, setIsVisible] = useState(true);

	const {...methods} = useForm<formDataWithDate>({
		defaultValues: useMemo(() => {
			return defaultValues;
		}, [defaultValues])
	});
	useEffect(() => {
		methods.reset(defaultValues);
	}, [defaultValues])

	const onSubmit = methods.handleSubmit(async (data) => {
		methods.reset(defaultValues);
		await submitHandler(data);
	});

	return (
		<>

			<BottomOverlay isVisible={isVisible}>
				<Layout style={styles.container}>
					<FormProvider {...methods}>
						<TextInput
							name="book_name"
							placeHolder="Bók"
							rules={{ required: 'Verður að fylla út' }}
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
						<DatepickerInput
							name="date_of_entry"
							label="Dagsetning:"
							placeHolder="Veldu dagsetningu"
						/>
						<TextInput
							name="comment"
							placeHolder="Athugasemd"
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
