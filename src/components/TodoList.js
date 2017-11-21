import React, { Component}from 'react';

// Class component that represents the list od todos into the app
class TodoList extends Component {

    render(){
        return(
            <div className="Todo-List">
                <ul>
                    {this.props.todos.map(todo => ( // due to there are 3 lines of JSX code, it is better to surroundthem with ()
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.isCompleted} /> {todo.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;