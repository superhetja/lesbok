import React from 'react';
import {
	Text,
	SafeAreaView,
	StyleSheet,
	TextInput,
	Button,
} from 'react-native';
import NumericInput from 'react-native-numeric-input';

let bookFrom = 0;
let bookTo = 0;
const styles = StyleSheet.create({
	inputBook: {
		height: 40,
		width: 250,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	inputFrom: {
		height: 40,
		width: 250,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});

const setBook = (action: string, page: number) => {
	if (action === 'TO') {
		bookTo = page;
	} else if (action === 'FROM') {
		bookFrom = page;
	} else {
		console.log('Invalid Action');
	}
};

function BookForm() {
	const [text, onChangeText] = React.useState('');

	const bookPlaceHolder = 'ARI FER HEIM';
	const initVal = 1;
	return (
		<SafeAreaView>
			<TextInput
				style={styles.inputBook}
				onChangeText={onChangeText}
				value={text}
				placeholder={bookPlaceHolder}
			/>
			<Text>Frá:</Text>
			<NumericInput onChange={(value) => setBook('FROM', value)} minValue={0} />
			<Text>Til:</Text>
			<NumericInput onChange={(value) => setBook('TO', value)} />
			<Button title="Submit.png" onPress={() => console.log('I am button')} />
		</SafeAreaView>
	);
}

export default BookForm;
