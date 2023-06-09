import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, ScrollView, Image, Button, TextInput } from 'react-native';
 
function BookStore() {
    const [searchGenre, setSearchGenre] = useState('');
    const [allBooks, setAllBooks] = useState([
      {
        "id": 101,
        "bookTitle": "Harry Potter and the Order Of Phoenix",
        "bookAuthor": "J.K.Rowling",
        "bookGenre": "Fiction",
        "bookCost": "200",
        "bookImageUrl": "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80"
      },
      {
        "id": 102,
        "bookTitle": "Harry Potter and the Sorcerers' Stone",
        "bookAuthor": "J.K.Rowling",
        "bookGenre": "Fiction",
        "bookCost": "300",
        "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        "id": 103,
        "bookTitle": "Harry Potter and the Sorcerers' Stone",
        "bookAuthor": "J.K.Rowling",
        "bookGenre": "Fiction",
        "bookCost": "450",
        "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      {
        "id": 104,
        "bookTitle": "Harry Potter and the Sorcerers' Stone",
        "bookAuthor": "J.K.Rowling",
        "bookGenre": "Comedy",
        "bookCost": "350",
        "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      
      }
    ]);
    const [filteredBooks, setFilteredBooks] = useState(allBooks);

    const handleRemove = (bookId)=>{
        setAllBooks(allBooks.filter(eachBook=>eachBook.id!=bookId))
    }  

    const renderBookStore = ()=>{
        return (
            filteredBooks.map((eachBook)=>(
                <View style={styles.listView} key={eachBook.id}>
                    <Text style={styles.bookTitlle}>{eachBook.bookTitle}</Text>
                    <Image  
                        source={{uri: eachBook.bookImageUrl}}
                        style={{width: 'auto', height: 200}} />
                    <Text>Book Id: {eachBook.id}</Text>
                    <Text>Book Author: {eachBook.bookAuthor}</Text>
                    <Text>Book Genre: {eachBook.bookGenre}</Text>
                    <Text>Book Cost: {eachBook.bookCost}</Text>
                    <Button
                        onPress={()=>handleRemove(eachBook.id)}
                        title="Remove"
                        color="#841584" />
                </View>
            ))
        )
    }

    const handleSearchGenre = (newSearchGenre) => {
        if(newSearchGenre=='')
           setFilteredBooks(allBooks)
        setFilteredBooks(allBooks.filter((eachBook)=>eachBook.bookGenre.includes(newSearchGenre)));
    }

    return ( 
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Book Store - Mobile App</Text>
            <TextInput
                style={{height:40}}
                placeHolder="Search By Genre"
                onChangeText={ newSearch => handleSearchGenre(newSearch) }
                defaultValue={searchGenre}/>
            <ScrollView style={styles.scrollView}>
                { renderBookStore() }
            </ScrollView>
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        padding: 10
    },
    titleText: {
        fontSize: 30,
        color: 'blue',
        fontWeight: 'bold'
    },
    scrollView:{
        backgroundColor: 'beige',
        marginHorizontal: 20
    },
    listView: {
        margin: 20,
        padding: 10,
        backgroundColor: 'lightgrey'
    },
    bookTitlle: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default BookStore;