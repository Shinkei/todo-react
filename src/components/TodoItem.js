import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" 
                    checked={this.props.isCompleted} // add the call for the acction that is sent by props
                    onChange={() => this.props.toggleTodoAction(this.props.id)} /> {this.props.name}
            </li>
        )
    }
}

export default TodoItem;