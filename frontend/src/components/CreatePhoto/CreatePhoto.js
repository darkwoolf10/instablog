import React, {Component} from "react";
import "./CreatePhoto.sass";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';

export default class CreatePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      photo: ''
    };
  };

  setDescription = (event) => {
    this.setState({description: event.target.value});
  };

  setPhoto = (event) => {
    this.setState({photo: event.target.files[0]});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = new FormData();
    data.append('photo', this.state.photo);
    data.append('description', this.state.description);

    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    axios.post('http://localhost:9000/photo/upload', data, config)
      .then(response => {
        console.log(response)
      })
  };

  render() {
    return (
      <form method='POST' encType="multipart/form-data" className="create-photo">
        <Button variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
                className="create-photo__input create-photo__btn">
          Upload File
          <input type="file" onChange={this.setPhoto} style={{ display: "none" }} />
        </Button>
        <TextField
            id="standard-basic"
            label="Description"
            className="create-photo__input"
            value={this.state.description}
            onChange={this.setDescription}
        />
        <Button variant="contained"
                component="label"
                color="primary"
                onClick={this.handleSubmit}
                className="create-photo__input create-photo__btn">
          Submit
        </Button>
      </form>
    );
  }
}
