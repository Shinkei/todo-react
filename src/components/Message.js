import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component created to show a message or do not render if there is no message
class Message extends Component {

    render() {
        return (
            <div>
                {this.props.message ? (<span className="message">{this.props.message}</span>) : (null)}
            </div>
        );
    }
}

export default connect(
    (state) => ({message: state.message.message}) // state.message is the reducer, from there we get the message value
)(Message);