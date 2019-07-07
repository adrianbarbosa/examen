import React, { Component } from "react";
import UsersItem from "./UsersItem";

class UsersFeed extends Component {
  render() {
    const { users } = this.props;
    return users.map(user => <UsersItem key={user.id} />);
  }
}

export default UsersFeed;
