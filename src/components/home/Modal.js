import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { avatar, email, first, last } = this.props.user;
    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
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
