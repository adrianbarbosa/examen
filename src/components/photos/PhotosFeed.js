import React, { Component } from "react";
import PhotosItem from "./PhotosItem";

class PhotosFeed extends Component {
  render() {
    const { photos } = this.props;
    return photos.map(photo => (
      <PhotosItem
        key={photo.id}
        title={photo.title}
        url={photo.url}
        thumbnailUrl={photo.thumbnailUrl}
      />
    ));
  }
}

export default PhotosFeed;
