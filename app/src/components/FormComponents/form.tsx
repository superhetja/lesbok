import React from 'react';
import { UseFormReturn, SubmitHandler } from 'react-hook-form';

type FormProps<TFormValues> = {
	onSubmit: SubmitHandler<TFormValues>;
	children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};
