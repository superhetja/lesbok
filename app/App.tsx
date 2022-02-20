import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getUsers } from './src/services/backend';

type User = {
  firstName: string,
  lastName: string,
}
export default function App() {
  const [data, setData] = useState<User[]>([]);

  const users = async () => {
    const u = await getUsers();
    setData(u)
  }

  useEffect(() => {
    users();
  }, []);


  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>{data && data[0].firstName}</Text>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
