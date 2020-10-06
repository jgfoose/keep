import React, { Component } from "react";

import Cards from "./Cards";
import NewCard from "./NewCard";

class Home extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div id="card_container">
            <Cards />
          </div>
        </div>
        <NewCard />
      </>
    );
  }
}

export default Home;
