import React, { Component} from 'react';

class TodoItem extends Component {
    render(){
        return(
            <li>
                <input type="checkbox" defaultChecked={this.props.isCompleted} /> {this.props.name}
            </li>
        )
    }
}

export default TodoItem;