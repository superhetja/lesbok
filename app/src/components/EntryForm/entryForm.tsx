// import { Layout } from "@ui-kitten/components";
// import { useEffect, useMemo } from "react";
// import { Controller, FormProvider, useForm } from "react-hook-form"

// type FormData = {
// 	book_name: string;
// 	book_from: number;
// 	book_to: number;
// 	comment: string;
// 	date_of_entry: any;
// 	book_id: string;
// }

// const EntryForm = ({defaultValues, submitHandler}) => {
// 	const {control, handleSubmit, formState: { errors }} = useForm<FormData>({
// 		defaultValues: useMemo(() => {
// 			return defaultValues;
// 		}, [defaultValues])
// 	});


// 	const onSubmit = methods.handleSubmit(async (data) => {
// 		console.log(defaultValues)
// 		methods.reset(defaultValues);
// 		await submitHandler(data);
// 	});

// 	useEffect(() => {
// 		methods.reset(defaultValues);
// 	}, [defaultValues])

// 	return (
// 		<Layout>
// 			<Controller

// 			/>
// 		</Layout>
// 	)
// }
