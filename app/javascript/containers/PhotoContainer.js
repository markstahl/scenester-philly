import React, { Component } from 'react'
import PhotoTile from '../components/PhotoTile'

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let showPhoto = this.state.photos.map(photo => {
      return (
          <PhotoTile
            img={photo.image_url}
            title={photo.title}
            year={photo.year}
          />
      )
    })
    return (
      <div>{showPhoto}</div>
    )
  }
}

export default PhotoContainer;
