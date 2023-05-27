import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DataDisplay from './components/DataDisplay';
import BookStore from './components/book/BookStore';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello React Native!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <DataDisplay></DataDisplay>
    <BookStore></BookStore>
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
