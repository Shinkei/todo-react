import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrentAction, saveTodoAction } from './../reducers/todo';

// call component that represents the form input for the todo app
class TodoForm extends Component {

    constructor(){
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        // every time the input gets an action, it is going to enter this method
        const value = event.target.value;
        this.props.updateCurrentAction(value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveTodoAction(this.props.currentTodo);
    }

    render() {
        const { currentTodo } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleInputChange} value={currentTodo} />
            </form>
        );
    }
}


// Here we export the component after applying the connect to redux and algo sending the updateCurrentAction fom the reducer, so it can be user from the props
export default connect(
    (state) => ({ currentTodo: state.currentTodo }),
    { updateCurrentAction, saveTodoAction }
)(TodoForm);