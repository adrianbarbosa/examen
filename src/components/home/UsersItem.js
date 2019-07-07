import React, { Component } from "react";

class UsersItem extends Component {
  render() {
    const { avatar, email, first, last } = this.props;

    return (
      <div className="card col-3 mr-5">
        <img
          src={avatar}
          className="card-img-top img-fluid img-rounded p-3"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">
            {first} {last}
          </h5>
          <p className="card-text">{email}</p>
          <a href="/" className="btn btn-primary">
            View more
          </a>
        </div>
      </div>
    );
  }
}

export default UsersItem;