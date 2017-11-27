import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // devtools extension so we can use the browser's add-on
import todoReducer from './reducers/todo';
import messageReducer from './reducers/messages';

const reducer = combineReducers({ // combine all the reducers into one
    todo: todoReducer,
    message: messageReducer
});

// create the store from redux ans add the reducer to handle the actions
export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))// Thunk help us to do asyncronous actions
);                                             // the compose let us check the store in the browser