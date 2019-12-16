import React, {Component} from "react";
import "./Gallery.css";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:9999/gallery")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);
  }

  UNSAFE_componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <p>Gallery</p>
      </div>
    );
  }
}