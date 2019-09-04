import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);

        this.placeholder = "Type here to send a message";
        this.state = {
            value: "",
            placeholder: this.placeholder
        };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleFocus() {
        this.setState({ placeholder: "" });
    }

    handleBlur() {
        this.setState({ placeholder: this.placeholder });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleKeyPress(event) {
        switch (event.key) {
            case "Enter":
                if (!event.shiftKey) this.handleSubmit(event);
                break;
            default:
                break;
        }
    }

    handleSubmit(event) {
        const message = this.state.value;
        this.setState({ value: "" });
        event.preventDefault();

        if (this.validateInput(message)) this.sendMessage(message);
    }

    validateInput(message) {
        const tests = [message.replace(/\s/g, "").length];
        return tests.every(x => x);
    }

    sendMessage(message) {
        const server = this.props.connection;
        const payload = JSON.stringify({
            date: this.setDate(),
            username: encodeURIComponent(this.props.user.name),
            message: encodeURIComponent(message)
        });
        server.send(payload);
    }

    setDate() {
        return new Date().getTime();
    }

    render() {
        return (
            <form className="input" onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.value}
                    placeholder={this.state.placeholder}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    disabled={!this.props.user.online}
                    maxLength="2500"
                />
            </form>
        );
    }
}

export default Input;
