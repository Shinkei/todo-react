import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { updateCurrentAction } from './reducers/todo';

// Apply a pattern from redux to bind the action from the reducer with an action of the element
const actions = bindActionCreators({ todoChangeHandler: updateCurrentAction }, store.dispatch);
//-----------------------------------element action-----reducer action--------dispatch

// surround our main component with the Provider from redux so it can provide the sotore and subscription
// send the state as props to the App component
ReactDOM.render(
    <Provider store={store}>
        <App changeCurrent={actions.todoChangeHandler} />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
