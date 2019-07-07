import React, { Component } from "react";

class PhotosItem extends Component {
  render() {
    const { title, url } = this.props;
    return (
      <div className="col-md-2">
        {title}
        <picture>
          <img src={url} alt={title} width="100%" />
        </picture>
      </div>
    );
  }
}

export default PhotosItem;
