import React, { Component } from "react";
import Modal from "./Modal";

class UsersItem extends Component {
  render() {
    const { avatar, email, first, last } = this.props;

    return (
      <div className="card col-md-3 mr-5">
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
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            View more
          </button>
          <Modal user={this.props} />
        </div>
      </div>
    );
  }
}

export default UsersItem;
