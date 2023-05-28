import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from '../reducers/bookReducer';

//const store = createStore(bookReducer);
const store = createStore(bookReducer, applyMiddleware(thunk));

export default store;
