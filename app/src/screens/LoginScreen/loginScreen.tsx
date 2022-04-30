import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../styles"
import {LoginForm} from '../../components/LoginForm'
import { useLoginMutation, useSetExpoPushTokenMutation } from "../../services/backend"
import { useDispatch } from "react-redux"
import { setCredentials } from "../../slices/authSlice"
import { Button } from "@ui-kitten/components"
import pushNotificationSetupAsync from "../../utils/notification/pushNotificationSetup"
import { View } from "react-native"


const LoginScreen = () =>
{
	const dispatch = useDispatch();
	const [login, {isLoading}] = useLoginMutation();

	const authenticate = async (name: string) => {
		try {
			console.log('authenticate')
			const user = await login({national_id: name}).unwrap();
			dispatch(setCredentials(user));
		} catch (err) {
			console.log(err)
		}
	}

	return(
		<View style={styles.container}>
			<LoginForm authorize={authenticate} />
		</View>
	)
}

export default LoginScreen;
