import React, { Component } from "react";
import AlbumsByUserItem from "./AlbumsByUserItem";

class AlbumsByUserFeed extends Component {
  render() {
    const { albums } = this.props;
    return albums.map(album => (
      <AlbumsByUserItem
        key={album.id}
        title={album.title}
        id={album.id}
        user={album.userId}
      />
    ));
  }
}

export default AlbumsByUserFeed;
