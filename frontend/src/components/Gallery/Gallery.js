import React, {Component, useEffect, useState} from "react";
import "./Gallery.sass";

 const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/gallery")
        .then(res => res.text())
        .then(pictures => setGallery(JSON.parse(pictures)))
        .catch(err => err);
  }, []);


   console.log(gallery);

   return (
      <div className='gallery'>
        {gallery.map(picture => {
          return (
              <div className='picture'>

                  <img src={picture.url} alt=""/>
                  <p>
                    {picture.description}
                  </p>
              </div>
          )
        })}
      </div>
    );
}

export default Gallery;