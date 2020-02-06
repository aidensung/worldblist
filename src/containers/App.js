import React, { Component } from 'react';
import { connect} from 'react-redux';
import logo from './logo.svg';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
    <div className="tc">
      <Navbar />
      
       
    </div>
  );
 }
}

export default App;
