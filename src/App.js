import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // router to navigate throug the app
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
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
        <Router> // inside this tag, the app will become a SPA
          <div className="Todo-App">
            <Message />
            <TodoForm />
            <TodoList />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;