
import React from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import Home from './Home';
import About from './About';
import Store from './Store';
import Contact from './Contact';
import Brands from './Brands';





const Navbar = () => {
  return (
    <div>
      <nav class="pa3 pa4-ns">
        <a
          class="link dim black b f2 f-headline-ns tc db mb3 mb4-ns"
          href="!#"
          title="Home"
        >
          World Blist
        </a>
        <div class="tc pb3">
          <NavLink class="link dim gray f6 f5-ns dib mr3" to="/">
            Home
          </NavLink>
          <NavLink class="link dim gray f6 f5-ns dib mr3" to="/about">
            About
          </NavLink>
          <NavLink class="link dim gray f6 f5-ns dib mr3" to="/store">
            Store
          </NavLink>
          <NavLink class="link dim gray f6 f5-ns dib mr3" to="/contact">
            Contact
          </NavLink>
        </div>
        <div class="brandname">
          <Brands />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
