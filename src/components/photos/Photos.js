import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import PhotosFeed from "./PhotosFeed";
import Spinner from "../common/Spinner";

class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: "",
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const album = this.props.match.params.id;

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album}`)
      .then(photos => {
        return photos.json();
      })
      .then(data => this.setState({ photos: data, isLoading: false }));
  }

  render() {
    const { photos, isLoading } = this.state;
    let photosContent;
    if (photos === null || isLoading || Object.keys(photos).length === 0) {
      photosContent = (
        <div className="col-12 mt-5">
          <Spinner />
        </div>
      );
    } else {
      photosContent = <PhotosFeed photos={photos} />;
    }

    return (
      <React.Fragment>
        <Navbar />
        <div className="container mt-5">
          <div className="row">{photosContent}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Photos;
