import React, { Component } from "react";
import UsersItem from "./UsersItem";

class UsersFeed extends Component {
  render() {
    const { users } = this.props;
    return users.map(user => (
      <UsersItem
        key={user.id}
        id={user.id}
        avatar={user.avatar}
        email={user.email}
        first={user.first_name}
        last={user.last_name}
      />
    ));
  }
}

export default UsersFeed;
