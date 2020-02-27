
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
          name: "Barbour"
        },
        {
          id: 2,
          name: "A-COLD-WALL*"
        },
        {
          id: 3,
          name: 'A.P.C.'
        }
      ]
    };
  }
  
  

  render() {
    return   (
          <div class="hide-child">
            Brand
            <Scroll>
              <p className="branddropdown" class="child">
                  {this.state.brandsAll.map(brandsAll =>  (
                    <p key={brandsAll.id}> {brandsAll.name}</p>
                  ))}
              </p>
            </Scroll>
          </div>
      );
  }
}

export default Brands;
