import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {updateCurrentAction} from './reducers/todo';

// Apply a pattern from redux to bind the action from the rducer with an action of the element
const actions = bindActionCreators({ todoChangeHandler: updateCurrentAction}, store.dispatch);
//-----------------------------------element action-----reducer action--------dispatch
const render = () => {
    // get a global state from the store for the todo objects
    const state = store.getState();
    
    // send the state as props to the App component
    ReactDOM.render(
        <App todos={state.todos} currentTodo={state.currentTodo} changeCurrent={actions.todoChangeHandler}/>,
        document.getElementById('root'));
}

render();

// subscribe the render to the store so whene there is any change, the render method will be excecuted
store.subscribe(render)

registerServiceWorker();
