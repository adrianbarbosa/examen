import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Spinner from "../common/Spinner";
import UsersFeed from "./UsersFeed";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: "",
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://reqres.in/api/users?delay=4")
      .then(users => {
        return users.json();
      })
      .then(data => this.setState({ users: data.data, isLoading: false }));
  }

  render() {
    const { users, isLoading } = this.state;

    let homeContent;
    if (users === null || isLoading || Object.keys(users).length === 0) {
      homeContent = <Spinner />;
    } else {
      homeContent = <UsersFeed users={users} isLoading={isLoading} />;
    }

    return (
      <React.Fragment>
        <Navbar />
        {homeContent}
      </React.Fragment>
    );
  }
}

export default Home;
