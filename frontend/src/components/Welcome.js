import React, {Component} from "react";
import "../App.css";
import {Link} from "react-router-dom";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:9999/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);
  }

  UNSAFE_componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <main className="App">
        <img src="/images/stack-of-photos.png" className="App-logo" alt="logo"/>
        <h1 className="App-title">Hello</h1>
        {/*<p className="App-intro">{this.state.apiResponse}</p>*/}
        <Link to="/create-photo">
          <div className="welcome-preview">
            <p>You wanted added photo?</p>
            <p>Click for me</p>
          </div>
        </Link>
      </main>
    );
  }
}

export default Welcome;
