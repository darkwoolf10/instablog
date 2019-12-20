import React, {Component} from "react";
import "./CreatePhoto.sass";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default class CreatePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {description: ''};

    this.setDescription = this.setDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setDescription(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.description);
  }

  render() {
    return (
      <form method='POST' encType="multipart/form-data" className="create-photo">
        <Button variant="contained" startIcon={<CloudUploadIcon />} className="create-photo__input create-photo__btn">
          Upload File
          <input type="file" style={{ display: "none" }} />
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
