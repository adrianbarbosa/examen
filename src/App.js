import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Home from "./components/home/Home";
import Album from "./components/album/Album";
import Footer from "./components/layout/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/album" component={Album} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
