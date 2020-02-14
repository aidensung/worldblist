import React, { Component } from "react";

import Header from "./Header";
import Brands from "./Brands";
import Scroll from "./Scroll";

export class MainPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="tc">
        <Scroll>
          <Navbar />
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
