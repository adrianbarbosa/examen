import React, { Component } from "react";
import Spinner from "../common/Spinner";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: ""
    };
  }

  componentDidMount() {
    const user = this.props.user.id;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user}`)
      .then(posts => {
        return posts.json();
      })
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const { posts } = this.state;
    const { avatar, email, first, last } = this.props.user;

    let post;
    if (posts === null || Object.keys(posts).length === 0) {
      post = <Spinner />;
    } else {
      post = posts.map(post => {
        return (
          <div key={post.id} className="col-12 border-bottom mb-5">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        );
      });
    }

    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="col-12">
                  <img
                    width="38%"
                    src={avatar}
                    className="img-rounded p-3"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {first} {last}
                  </h5>
                  <p className="card-text">{email}</p>
                </div>
              </div>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-12 text-center mb-3">
                    <h3>Posts</h3>
                  </div>
                </div>
                <div className="row">{post}</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
