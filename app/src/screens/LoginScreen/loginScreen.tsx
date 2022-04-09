import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../styles"
import LoginForm from '../../components/LoginForm/'


const LoginScreen = () =>
{
	return(
		<SafeAreaView style={styles.container}>
			<LoginForm />
		</SafeAreaView>
	)
}

export default LoginScreen;
