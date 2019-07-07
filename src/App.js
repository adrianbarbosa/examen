import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/layout/Login";
import Home from "./components/home/Home";
import Albums from "./components/album/Albums";
import AlbumsByUser from "./components/album/AlbumsByUser";
import Photos from "./components/photos/Photos";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/albums/:id" component={AlbumsByUser} />
            <Route exact path="/photos/:id" component={Photos} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
