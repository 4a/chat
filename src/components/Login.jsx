import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: ""
        };

        this.loginAnon = this.loginAnon.bind(this);
        this.loginGuest = this.loginGuest.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    autoName() {
        return "anon" + Math.floor(Math.random() * 9000 + 1000);
    }

    loginAnon() {
        const user = {
            online: true,
            name: this.autoName()
        };
        this.props.setUser(user);
    }

    loginGuest() {
        const user = {
            online: true,
            name: this.state.guestName
        };
        this.props.setUser(user);
    }

    handleChange(event) {
        this.setState({ guestName: event.target.value });
    }

    render() {
        return !this.props.user.online ? (
            <div className="login">
                <h3>Log in</h3>
                <ol>
                    <li>
                        Anonymously
                        <button onClick={this.loginAnon}>Go</button>
                    </li>
                    <li>
                        With a temporary name:
                        <input type="text" onChange={this.handleChange} placeholder="Temporary Name" />
                        <button onClick={this.loginGuest} disabled={!this.state.guestName.length}>
                            Go
                        </button>
                    </li>
                    {/* <li>
                        As a registered member:
                        <input type="text" placeholder="User name" />
                        <input type="text" placeholder="Password" />
                        <button>Go</button>
                    </li> */}
                </ol>
            </div>
        ) : null;
    }
}

export default Login;
