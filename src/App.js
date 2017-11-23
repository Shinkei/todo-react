import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { updateCurrentAction } from './reducers/todo';

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
          <TodoForm currentTodo={this.props.currentTodo} changeCurrent={this.props.updateCurrentAction} />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

// connect out main component with the store, pass the state and list of actions
export default connect((state) => state, { updateCurrentAction })(App);