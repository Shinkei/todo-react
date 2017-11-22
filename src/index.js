import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

// get a global state from the store for the todo objects
const state = store.getState();

// send the state as props to the App component
ReactDOM.render(<App {...state}/>, document.getElementById('root'));
registerServiceWorker();
