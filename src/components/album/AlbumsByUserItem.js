import React, { Component } from "react";

class AlbumsByUserItem extends Component {
  render() {
    const { id, title, user } = this.props;
    return (
      <div className="card col-3 mb-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <a href={`/photos/${id}`} className="card-link">
            Go to album
          </a>
        </div>
      </div>
    );
  }
}

export default AlbumsByUserItem;
