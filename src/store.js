import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/todo';

// create the store from redux ans add the reducer to handle the actions
export default createStore(
    reducer,
    applyMiddleware(thunk) // Thunk help us to do asyncronous actions
);