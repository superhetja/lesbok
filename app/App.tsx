import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getUsers } from './src/services/backend';
import BookForm from './src/modules/BookForm'

type User = {
  firstName: string;
  lastName: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [data, setData] = useState<User[]>([]);

  const users = async () => {
    const u = await getUsers();
    setData(u);
  };

  useEffect(() => {
    users();
  }, []);

  return (
    <View style={styles.container}>
      <BookForm />
      {/* <Text>Hello World!</Text> */}
      {/* <Text>{data && data[0].firstName}</Text> */}
      <Text>{JSON.stringify(data)}</Text>
      <StatusBar />
    </View>
  );
}
