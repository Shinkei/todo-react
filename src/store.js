import {createStore} from 'redux';
import reducer from './reducers/todo';

// create the store from redux ans add the reducer to handle the actions
export default createStore(reducer);