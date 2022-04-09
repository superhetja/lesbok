import React from "react";
import { Button, Text, Layout } from "@ui-kitten/components";
import { FormProvider, useForm } from "react-hook-form";
import {showMessage} from 'react-native-flash-message'
import { TextInput } from "../FormComponents";
import styles from "./styles";

type FormData = {
	telephone: string;
}

type FormTelephone = {
	telephone: string;
}



const LoginForm = () => {
	const {...methods} = useForm<FormData>();
	const onSubmit = methods.handleSubmit( () =>
			showMessage({
			message: "Þú hefur verið skráð/ur inn.",
			type: "success"
		})
		)
		console.log(methods.getValues('telephone'))
	return (
		<>
		<Layout style={styles.welcomeText}>

			<Text>Velkomin/n á Lesbók.</Text>
			<Text>Til þess að nota smáforritið þarf að skrá sig inn með símanúmeri</Text>
		</Layout>

			<FormProvider {...methods}>
				<Layout style={styles.container}>
				<Text>Símanúmer</Text>
				<Layout style={styles.telephoneWrapper}>
					<TextInput
						name="region_code"
						placeHolder="+354"
						disabled={true}
						/>
						<Layout style={styles.telephoneNumber}>
					<TextInput
						name="telephone"
						// rules={{required: 'verður ap fylla út'}}
						rules={{
							required: 'Verður að skrá símanúmer',
							pattern: {
							value: /[4-8]{3}-? ?[0-9]{4}/,
							message: 'Verður að vera gilt símanúmer'
						}}}
						/>
						</Layout>
					</Layout>
					<Button onPress={onSubmit} >Innskrá </Button>
					</Layout>
				{/* </Layout> */}

			</FormProvider>
		</>

	)
}

export default LoginForm;