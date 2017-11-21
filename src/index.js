import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//create a global state for the todo objects
const state = {
    todos: [
        {id: 1, name: 'Render Stasstic UI', isCompleted: true},
        {id: 2, name: 'Create Initial State', isCompleted: false},
        {id: 3, name: 'use State to Render UI', isCompleted: false}
    ]
};

// send the state as props to the App component
ReactDOM.render(<App todos={state.todos}/>, document.getElementById('root'));
registerServiceWorker();
