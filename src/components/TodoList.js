import React, { Component}from 'react';
import TodoItem from './TodoItem';

// Class component that represents the list od todos into the app
class TodoList extends Component {

    render(){
        return(
            <div className="Todo-List">
                <ul>
                    {this.props.todos.map(todo => ( // due to there are 3 lines of JSX code, it is better to surroundthem with ()
                        <TodoItem key={todo.id} {...todo}/> // we are spreading the content of todo and send each property into props, we assign the key here and not in the child component to avoid a warning in the browser for the unique key in the array
                    ))}                       
                </ul>
            </div>
        );
    }
}

export default TodoList;