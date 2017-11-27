import React, { Component } from 'react';

// Component created to show a message or do not render if there is no message
class Message extends Component {

    render() {
        return (
            <div>
                {this.props.message ? (<span className="message">{this.props.message}</span>) : null}
            </div>
        );
    }
}

export default Message;