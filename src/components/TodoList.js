import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTodosAction, toggleTodoAction, deleteTodoAction, getVisibleTodos } from './../reducers/todo';

// Class component that represents the list od todos into the app
class TodoList extends Component {
    // after the component is rendered we retrieve the list of tasks
    componentDidMount() {
        this.props.fetchTodosAction();
    }

    render() {
        return (
            <div className="Todo-List">
                <ul>
                    {this.props.todos.map(todo => ( // due to there are 3 lines of JSX code, it is better to surroundthem with ()
                        <TodoItem key={todo.id}
                            toggleTodoAction={this.props.toggleTodoAction}
                            deleteTodoAction={this.props.deleteTodoAction}
                            {...todo} // we are spreading the content of todo and send each property into props, we assign the key here and not in the child component to avoid a warning in the browser for the unique key in the array
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

// We export  the component after aplying the conenct pater and asign the todos value from the state
export default connect(
    (state, ownProps) => ({ todos: getVisibleTodos(state.todo.todos, ownProps.filter) }),// state.todo is the name if the reducer we want to use with this component
    // here we call the getVisibleTodos function and pass it the filtar according with the router (check app.js:26)
    { fetchTodosAction, toggleTodoAction, deleteTodoAction }
)(TodoList);