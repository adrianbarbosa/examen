import React, { Component } from "react";

class UsersItem extends Component {
  render() {
    const { id, name, email, phone, username } = this.props;
    return (
      <div className="card col-3 mr-3 mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
          <p className="card-text">
            {phone} {email}
          </p>
          <a href={`/album/${id}`} className="card-link">
            Go to album
          </a>
        </div>
      </div>
    );
  }
}

export default UsersItem;
