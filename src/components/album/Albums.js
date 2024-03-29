import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import AlbumsUserFeed from "./AlbumsUserFeed";
import Spinner from "../common/Spinner";

class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: "",
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(users => {
        return users.json();
      })
      .then(data => this.setState({ users: data, isLoading: false }));
  }

  render() {
    const { users, isLoading } = this.state;
    console.log(users);
    let albumContent;
    if (users === null || isLoading || Object.keys(users).length === 0) {
      albumContent = (
        <div className="col-12 mt-5">
          <Spinner />
        </div>
      );
    } else {
      albumContent = <AlbumsUserFeed users={users} />;
    }

    return (
      <React.Fragment>
        <Navbar />
        <div className="container mt-5">
          <div className="row">{albumContent}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Albums;
