import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DataDisplay from './components/DataDisplay';
import BookStore from './components/book/BookStore';
import BookStoreReduxThunk from './components/book-redux-thunk/BookStoreReduxThunk';
import { Provider } from 'react-redux';
import store from './components/book-redux-thunk/store/store';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello React Native!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <DataDisplay></DataDisplay>
    // <BookStore></BookStore>
    <Provider store={store}>
       <BookStoreReduxThunk></BookStoreReduxThunk>
    </Provider>
    
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
