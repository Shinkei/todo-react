import React from 'react';

// functional component that represents the form input for the todo app
export default (props) => {

    const {currentTodo, changeCurrent} = props;

    const handleInputChange = event => {
        // every time the input gets an action, it is going to enter this method
        const value = event.target.value;
        changeCurrent(value);
    }

    return (
        <form>
            <input type="text" onChange={handleInputChange} value={currentTodo}/>
        </form>
    );
}