import React, {Component} from "react";
import "./Gallery.sass";
import axios from 'axios';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    };

    axios.get('http://localhost:9000/gallery')
      .then(response => this.setState({gallery: response.data}))
      .catch(err => err);
  };

  deletePhoto = (picture) => {
    this.state.gallery.forEach((current, index) => {
      if (current._id === picture._id) {
        this.state.gallery.splice(index, 1);
        this.setState({gallery: this.state.gallery});
      }
    });
    axios.post('http://localhost:9000/photo/delete', {
      id: picture._id
    })
      .then(() => console.log("Delete item"))
      .catch(err => err);
  };

  render() {
    return (
      <div className='gallery'>
        {this.state.gallery.map(picture => {
          return (
            <div className='picture' key={picture._id}>

              <img src={picture.url} alt=""/>
              <div>
                {picture.description}
                <p onClick={() => {this.deletePhoto(picture)}} className="picture__delete-btn">x</p>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}
