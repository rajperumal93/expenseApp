import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, TextInput, Button } from 'react-native';
import MyStack from './src/navigation/Routes';
import Header from './src/screens/header/Header';

export default function App() {

  return (
    <MyStack />
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f60'
  }
})