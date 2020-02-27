
import React, { Component } from "react";
import Scroll from "./Scroll";

import "../containers/App.css";


class Brands extends Component {
  constructor() {
    super();
    this.state = {
      brandsAll: [
        {
          id: 1,
          name: 'A.P.C.'
        },
        {
          id: 2,
          name: 'A-COLD-WALL*'
        }
      ]
    }
  }

  render () {
    return(
    <div class="hide-child">
      Brand
      <Scroll>
        <div className="branddropdown" class="child">
         {this.state.brandsAll.map(brandsAll => (
           <div key={brandsAll.id}> {brandsAll.name}</div>
         ))}
        </div>
      </Scroll>
    </div>
   )
  }
}

export default Brands;
