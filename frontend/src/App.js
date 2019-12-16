import React, { Component } from "react";
import "./App.css";
import CreatePhoto from "./components/CreatePhoto";
import Gallery from "./components/Gallery/Gallery";
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
                        {/*<Link to="/login">*/}
                        {/*    <li>Login</li>*/}
                        {/*</Link>*/}
                        <Link to="/create-photo">
                            <li>Create Photo</li>
                        </Link>
                        <Link to="/gallery">
                            <li>Gallery</li>
                        </Link>
                    </ul>
                </header>
                <div className="App">
                    <Switch>
                        <Route path="/home">
                            <Welcome />
                        </Route>
                        {/*<Route path="/login">*/}
                        {/*    <Login />*/}
                        {/*</Route>*/}
                        <Route path="/create-photo">
                            <CreatePhoto />
                        </Route>
                        <Route path="/gallery">
                            <Gallery />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
