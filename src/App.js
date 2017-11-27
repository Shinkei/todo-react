import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to shinkei-react</h1>
        </header>
        <p className="App-intro">
          TODO App to test the react and redux functionalities
        </p>
        <div className="Todo-App">
          <Message />
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;