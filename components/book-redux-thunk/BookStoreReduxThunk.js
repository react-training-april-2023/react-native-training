import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, ScrollView, Image, Button, TextInput } from 'react-native';
import { getAllBooksThunkActionCreator, successFetchAllBooksActionCreator } from './actions/bookActions';
import { connect } from 'react-redux';
 
function BookStoreReduxThunk(props) {
    const [searchGenre, setSearchGenre] = useState('');
    //const [allBooks, setAllBooks] = useState([]);
    //const [filteredBooks, setFilteredBooks] = useState(allBooks);

    useEffect(()=>{
      props.fetchAllBooksProps();
    }, [])

    const handleRemove = (bookId)=>{
       // setAllBooks(allBooks.filter(eachBook=>eachBook.id!=bookId))
    }  

    const renderBookStore = ()=>{
        return (
            // filteredBooks.map((eachBook)=>(
                props.allBooksProps.map((eachBook)=>(
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
        // if(newSearchGenre=='')
        //    setFilteredBooks(allBooks)
        // setFilteredBooks(allBooks.filter((eachBook)=>eachBook.bookGenre.includes(newSearchGenre)));
    }

    return ( 
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Book Store Redux Thunk - Mobile App</Text>
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

const mapStateToProps = (state)=> {
    console.log("state in mapStateToProps...", state);
    return {
        allBooksProps: state.data,
        //errorProps: state.error
    }
}
  
const mapDispatchToProps = (dispatch)=>{
    return{
        //fetchAllBooksProps: ()=>dispatch(successFetchAllBooksActionCreator())
        fetchAllBooksProps: ()=>dispatch(getAllBooksThunkActionCreator())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BookStoreReduxThunk);