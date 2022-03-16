import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function EntryForm() {
	const {
		control,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			book_name: String,
			book_from: Number,
			book_to: Number,
		},
	});
	const onSubmit = (data) => console.log(data);

	return (
		<View>
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
						value={value}
					/>
				)}
				name="book_name"
			/>
			{errors.firstName && <Text>This is required.</Text>}

			<Controller
				control={control}
				rules={{
					maxLength: 3,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						onBlur={onBlur}
						onChangeText={onChange}
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
					<TextInput
						style={styles.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
					/>
				)}
				name="book_to"
			/>

			<Button title="Submit" onPress={handleSubmit(onSubmit)} />
		</View>
	);
}
