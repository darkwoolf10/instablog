import React, { Component } from "react";
import logo from '../logo.svg';
import "../App.css";
import { Link } from "react-router-dom";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <main className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
                <p className="App-intro">{this.state.apiResponse}</p>
                <Link to="/login">Login</Link>
            </main>
        );
    }
}

export default Welcome;
