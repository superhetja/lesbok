import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../styles"
import LoginForm from '../../components/LoginForm/'
import { Authorize } from "../../utils/auth"
import { useLoginMutation } from "../../services/backend"
import { useDispatch } from "react-redux"
import { assertCast } from "@reduxjs/toolkit/dist/query/tsHelpers"
import { setCredentials } from "../../slices/authSlice"


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
		<SafeAreaView style={styles.container}>
			<LoginForm authorize={authenticate} />
		</SafeAreaView>
	)
}

export default LoginScreen;
