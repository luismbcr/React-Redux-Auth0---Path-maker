import React, { Component } from 'react';
import './App.css';
import Router from "./Router";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React/Redux app</h1>
        <Link to="/">Home</Link>{' '} 
        <Link to="/about">Info</Link> {' '} 
        <Link to="/link">Other Link</Link>
        <Router/>
      
      </div>
    );
  }
}

export default App;
