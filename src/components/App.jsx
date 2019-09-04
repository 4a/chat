import React, { Component } from "react";
import "./App.css";

import MessageList from "./MessageList.jsx";
import Input from "./Input.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            connection: new WebSocket(process.env.REACT_APP_WSS_URI),
            user: {
                online: false
            }
        };

        this.setUser = this.setUser.bind(this);
    }

    setUser(user) {
        this.setState({ user: user });
    }

    render() {
        return (
            <div id="chat">
                <MessageList connection={this.state.connection} user={this.state.user} />
                <Input connection={this.state.connection} user={this.state.user} />
                <Login user={this.state.user} setUser={this.setUser} />
                <Logout setUser={this.setUser} />
            </div>
        );
    }
}

export default App;
