import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/layout/Login";
import Home from "./components/home/Home";
import Album from "./components/album/Album";
// import Footer from "./components/layout/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/album" component={Album} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
