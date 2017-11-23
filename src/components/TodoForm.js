import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentAction } from './../reducers/todo';

// functional component that represents the form input for the todo app
const TodoForm = (props) => {
    const { currentTodo, updateCurrentAction } = props;

    const handleInputChange = event => {
        // every time the input gets an action, it is going to enter this method
        const value = event.target.value;
        updateCurrentAction(value);
    }

    return (
        <form>
            <input type="text" onChange={handleInputChange} value={currentTodo} />
        </form>
    );
}

// Here we export the component after applying the connect to redux and algo sending the updateCurrentAction fom the reducer, so it can be user from the props
export default connect(
    (state) => ({ currentTodo: state.currentTodo }),
    { updateCurrentAction }
)(TodoForm);