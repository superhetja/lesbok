import React from 'react';
import {
  useForm,
  UseFormReturn,
  UseFormRegisterReturn,
  SubmitHandler,
} from 'react-hook-form';

type FormProps<TFormValues> = {
	onSubmit: SubmitHandler<TFormValues>;
	children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

// const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
// 	onSubmit,
// 	children,
// }): FormProps<TFormValues>) => {
// 	const methods = useForm<TFormValues>();
// 	return (
// 		<View>

// 		</View>
// 	)
// }
