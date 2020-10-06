import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Home from "./Home";
import Nav from "./Nav";

const Landing = () => <h1>Please Sign In</h1>;

class App extends Component {
  //fetch local storage on page load
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Nav />
          <Route exact path="/" component={this.props.auth ? Home : Landing} />
          <Route path="/reactKeep" component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
