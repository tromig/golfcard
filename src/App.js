import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Router>        
      		<Home />
      	</Router>
      </div>
    );
  }
}

export default App;
