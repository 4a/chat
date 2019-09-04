import React, { Component } from "react";
import { randomItem } from "./../util/helpers.js";

class Message extends Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.getMessage = this.getMessage.bind(this);
    }

    getDate() {
        const d = new Date(this.props.data.date);
        const date = d.toDateString();
        const time = d.toLocaleTimeString();
        return `${date}  ${time}`;
    }

    getUsername() {
        return decodeURIComponent(this.props.data.username);
    }

    getMessage() {
        return decodeURIComponent(this.props.data.message);
    }

    render() {
        return (
            <div className="message">
                <div className="date">
                    {this.getDate()}
                    <i className="fa fa-flag" title="Flag this user"></i>
                </div>
                {this.getUsername()}: {this.getMessage()}
            </div>
        );
    }
}

export default Message;
