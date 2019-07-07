import React, { Component } from "react";
import AlbumsByUserItem from "./AlbumsByUserItem";

class AlbumsByUserFeed extends Component {
  render() {
    const { albums } = this.props;
    return albums.map(album => (
      <AlbumsByUserItem key={album.id} id={album.id} />
    ));
  }
}

export default AlbumsByUserFeed;
