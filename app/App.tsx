import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getUsers } from './src/services/backend';

export default function App() {
  const [data, setData] = useState([]);

  const users = async () => {
    const u = await getUsers();
    setData(u)
  }

  useEffect(() => {
    users();
  }, []);


  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data)}</Text>
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
