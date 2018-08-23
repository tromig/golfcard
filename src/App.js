import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Hole from './components/Hole/Hole';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Router className='router'> 
      		<div>       
	      		<Route exact path='/' component={Home} />
	      		<Route path='/course' component={Hole} />
	      	</div>
      	</Router>
      </div>
    );
  }
}

export default App;
