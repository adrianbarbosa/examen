import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import AlbumsByUserFeed from "./AlbumsByUserFeed";
import Spinner from "../common/Spinner";

class AlbumsByUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: "",
      isLoading: false
    };
  }

  componentDidMount() {
    const user = this.props.match.params.id;
    this.setState({ isLoading: true });

    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user}`)
      .then(albums => {
        return albums.json();
      })
      .then(data => this.setState({ albums: data, isLoading: false }));
  }

  render() {
    const { albums, isLoading } = this.state;

    let albumsContent;
    if (albums === null || isLoading || Object.keys(albums).length === 0) {
      albumsContent = (
        <div className="col-12 mt-5">
          <Spinner />
        </div>
      );
    } else {
      albumsContent = <AlbumsByUserFeed albums={albums} />;
    }

    return (
      <React.Fragment>
        <Navbar />
        {albumsContent}
      </React.Fragment>
    );
  }
}

export default AlbumsByUser;
