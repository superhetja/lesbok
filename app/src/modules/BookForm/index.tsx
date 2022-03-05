import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import NumericInput from 'react-native-numeric-input';

var bookFrom = 0;
var bookTo = 0;

const setBook = (action: string, page: number) => {
  if (action === 'TO') {
    bookTo = page;
  } else if (action === 'FROM') {
    bookFrom = page;
  } else {
    console.log('Invalid Action');
  }
};

const BookForm = () => {
  const [text, onChangeText] = React.useState(null);

  const bookPlaceHolder = 'ARI FER HEIM';
  const initVal = 1;
  return (
    <SafeAreaView>
      <TextInput
        name="book-name"
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
};

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

export default BookForm;
