// action constants
const BookActions = {
    FETCH_ALL_BOOKS: 'FETCH_ALL_BOOKS',
    SUCCESS_FETCH_ALL_BOOKS: 'SUCCESS_FETCH_ALL_BOOKS',
    ERROR_FETCH_ALL_BOOKS: 'ERROR_FETCH_ALL_BOOKS',
}


// action creators
const fetchAllBooksActionCreator = () => {
    return ({
        type: BookActions.FETCH_ALL_BOOKS
    })
}

const successFetchAllBooksActionCreator = (data) => {
    return ({
        type: BookActions.SUCCESS_FETCH_ALL_BOOKS,
        payload: data
        // payload: [
        //     {
        //       "id": 101,
        //       "bookTitle": "Harry Potter and the Order Of Phoenix",
        //       "bookAuthor": "J.K.Rowling",
        //       "bookGenre": "Fiction",
        //       "bookCost": "200",
        //       "bookImageUrl": "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80"
        //     },
        //     {
        //       "id": 102,
        //       "bookTitle": "Harry Potter and the Sorcerers' Stone",
        //       "bookAuthor": "J.K.Rowling",
        //       "bookGenre": "Fiction",
        //       "bookCost": "300",
        //       "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        //     }
        //   ]
    })
}

const errorFetchAllBooksActionCreator = (error) => {
    return ({
        type: BookActions.ERROR_FETCH_ALL_BOOKS,
        payload: error
    })
}


// normal/redux action creators - these are functions that return an action object, 
//                                  action objects are javascript object with type property
// thunk action creators - these are functions which dont return action objects
//                         these will dispatch actions (much similar to saga workers)
// here i will create a thunk action creator
const getAllBooksThunkActionCreator = () => (dispatch) =>{
    dispatch(fetchAllBooksActionCreator());
    fetch("http://10.0.0.88:4000/books")
    .then((response)=>response.json())
    .then((data)=>dispatch(successFetchAllBooksActionCreator(data)))
    .catch((err)=>dispatch(errorFetchAllBooksActionCreator(err)))
}

export { BookActions, successFetchAllBooksActionCreator, getAllBooksThunkActionCreator };