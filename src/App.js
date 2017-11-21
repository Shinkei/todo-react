import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <form>
            <input type="tesxt"/>
          </form>
          <div className="Todo-List">
            <ul>
              {this.props.todos.map(todo => (
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isCompleted}/> {todo.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
