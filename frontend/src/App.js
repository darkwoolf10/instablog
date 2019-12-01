import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <header>
                    <ul>
                        <Link to="/home">
                            <li>Home</li>
                        </Link>
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                    </ul>
                </header>
                <div className="App">
                    <Switch>
                        <Route path="/home">
                            <Welcome />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
