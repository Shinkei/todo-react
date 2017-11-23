import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {updateCurrentAction} from './reducers/todo';

// we start handling the actions only in the reducer and import them to use in another places
const todoChangeHandler = value => store.dispatch(updateCurrentAction(value));

const render = () => {
    // get a global state from the store for the todo objects
    const state = store.getState();
    
    // send the state as props to the App component
    ReactDOM.render(
        <App todos={state.todos} currentTodo={state.currentTodo} changeCurrent={todoChangeHandler}/>,
        document.getElementById('root'));
}

render();

// subscribe the render to the store so whene there is any change, the render method will be excecuted
store.subscribe(render)

registerServiceWorker();
