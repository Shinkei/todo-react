import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const todoChangeHandler = value => store.dispatch({type: 'CURRENT_UPDATE', payload: value});

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
