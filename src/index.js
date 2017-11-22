import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const render = () => {
    // get a global state from the store for the todo objects
    const state = store.getState();
    
    // send the state as props to the App component
    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
}

render();

// subscribe the render to the store so whene there is any change, the render method will be excecuted
store.subscribe(render)

// TEMPORAL CODE
setTimeout(() => {
    store.dispatch({type: 'ADD', payload: {id: 4, name: 'new task', isCompleted: false}})
}, 1000);

registerServiceWorker();
