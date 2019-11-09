import React, { Component } from "react";
import { Input } from '@material-ui/core';
import {
    Link
} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Login">
                Login
                <Link to="/home">Home</Link>
            </div>
        );
    }
}

export default Login;
