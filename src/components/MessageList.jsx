import React, { Component } from "react";
import Message from "./Message.jsx";
import { randomInterval, range, uuidv4 } from "../util/helpers.js";

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = { messages: [], firstScroll: false };

        this.ref = React.createRef();

        this.scrollToAnchor = this.scrollToAnchor.bind(this);
        this.appendMessage = this.appendMessage.bind(this);
        this.handleWebSocketMessage = this.handleWebSocketMessage.bind(this);
    }

    componentDidMount() {
        // this.scrollToAnchor();
        this.handleWebSocketMessage();
    }

    componentDidUpdate() {
        this.scrollToAnchor();
    }

    handleWebSocketMessage() {
        const server = this.props.connection;
        server.onmessage = response => this.appendMessage(response.data);
    }

    scrollToAnchor() {
        if (this.state.messages.length > 25 && !this.state.firstScroll) {
            const ref = this.ref.current;
            ref.scrollTop = ref.scrollHeight;
            this.setState({ firstScroll: true });
        }
    }

    appendMessage(raw) {
        const data = JSON.parse(raw);
        const key = uuidv4();
        const message = <Message key={key} data={data} />;
        this.setState(prevState => ({ messages: [...prevState.messages, message].slice(-50) }));
    }

    listMessages(n) {
        return range(0, n).map(x => <Message key={x} />);
    }

    render() {
        return (
            <div className="messages" ref={this.ref}>
                {this.state.messages}
                <div className="message-anchor" />
            </div>
        );
    }
}

export default MessageList;
