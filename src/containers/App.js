import React, { Component } from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import { connect} from 'react-redux';
import logo from './logo.svg';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Store from '../components/Store';
import Contact from '../components/Contact';
import Scroll from '../components/Scroll';

import './App.css';

class App extends Component {
  render() {
    return (
    <HashRouter>
    <div className="tc">
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/store" component={Store}/>
      <Route path="/contact" component={Contact}/>
    </div>
        <div className="content tc">
           
        </div>
    </HashRouter>
  );
 }
}

export default App;
