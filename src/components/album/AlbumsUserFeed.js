import React, { Component } from "react";
import AlbumsUserItem from "./AlbumsUserItem";

class AlbumsUsersFeed extends Component {
  render() {
    const { users } = this.props;
    return users.map(user => (
      <AlbumsUserItem
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        phone={user.phone}
        username={user.username}
      />
    ));
  }
}

export default AlbumsUsersFeed;
