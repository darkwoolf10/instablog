import React, {Component} from "react";
import "./Gallery.sass";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

  UNSAFE_componentWillMount() {
    fetch("http://localhost:9000/gallery")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
        .catch(err => err);
  }

  render() {
    return (
      <div>
        <p>Gallery</p>
      </div>
    );
  }
}
