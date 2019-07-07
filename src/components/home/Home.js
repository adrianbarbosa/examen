import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import UsersFeed from "./UsersFeed";
import Spinner from "../common/Spinner";

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
      homeContent = (
        <div className="col-12 mt-5">
          <Spinner />
        </div>
      );
    } else {
      homeContent = <UsersFeed users={users} isLoading={isLoading} />;
    }

    return (
      <React.Fragment>
        <Navbar />
        <div className="container mt-5">
          <div className="row">{homeContent}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
