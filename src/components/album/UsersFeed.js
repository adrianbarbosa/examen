import React, { Component } from "react";
import UsersItem from "./UsersItem";

class UsersFeed extends Component {
  render() {
    const { users } = this.props;
    return users.map(user => (
      <UsersItem
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

export default UsersFeed;
