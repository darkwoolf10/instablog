import React, {Component} from "react";

export default class CreatePhoto extends Component {
  render() {
    return (
      <div>
        <form action="" method='POST' encType="multipart/form-data">
          <input type="file" />
          <input type="text" id="description" placeholder="Description"/>
        </form>
      </div>
    );
  }

  savePhoto() {
    
  }
}
