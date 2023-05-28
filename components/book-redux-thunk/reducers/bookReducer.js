import { BookActions } from "../actions/bookActions"

const initialState ={
    data: [],
    error: ''
}

const bookReducer = (state=initialState, action)=>{
    console.log("state:", state);
    // return new state
    switch(action.type){
        case BookActions.FETCH_ALL_BOOKS:
            return {
                ...state
            }
        case BookActions.SUCCESS_FETCH_ALL_BOOKS:
            return {
                ...state,
                data: [...action.payload]
            }
        case BookActions.ERROR_FETCH_ALL_BOOKS:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default bookReducer;