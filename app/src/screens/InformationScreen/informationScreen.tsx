import React from "react"
import Informations from "../../components/Informations/Informations"
import {SafeAreaView} from 'react-native';
import styles from '../styles'


export const InformationScreen = () => {
	return(
		<SafeAreaView style={styles.container}>
			<Informations/>
		</SafeAreaView>
	)
}
