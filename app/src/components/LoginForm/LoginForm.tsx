import React from 'react';
import { Button, Text, Layout } from '@ui-kitten/components';
import { FormProvider, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { TextInput } from '../FormComponents';
import styles from './styles';

const DEFAULT_VALUE = '2002942999';
// const DEFAULT_VALUE = '2802942929';

type FormData = {
	telephone: string;
};

type FormTelephone = {
	telephone: string;
};

type KennitalaForm = {
	kennitala: string;
};

type LoginFromProps = {
	authorize: (name: string) => any;
};

function LoginForm({ authorize }: LoginFromProps) {
	const { ...methods } = useForm<KennitalaForm>({
		defaultValues: { kennitala: DEFAULT_VALUE },
	});
	const onSubmit = methods.handleSubmit(data => authorize(data.kennitala));
	return (
		<>
			<Layout style={styles.welcomeText}>
				<Text>Velkomin/n á Lesbók.</Text>
				<Text>Til þess að nota Lesbók þarf að skrá sig inn með kennitölu</Text>
			</Layout>

			<FormProvider {...methods}>
				<Layout style={styles.container}>
					<Text>Kennitala</Text>
					<Layout>
						<TextInput name="kennitala" />
					</Layout>
					<Button onPress={onSubmit}>Innskrá </Button>
				</Layout>
			</FormProvider>
		</>
	);
}

export default LoginForm;
