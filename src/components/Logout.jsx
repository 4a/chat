import React, { Component } from "react";

class Logout extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        const user = {
            online: false
        };
        this.props.setUser(user);
    }

    render() {
        return (
            <div className="logout">
                <button onClick={this.logout}>Log Out</button>
            </div>
        );
    }
}

export default Logout;
