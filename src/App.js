import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Router from "./Router";
import Header from "./components/global/Header";
import Container from "./components/global/Container";

class App extends Component {
  render() {
    return (
      <Container>
        <Header
         title="Path Maker"
         subtitle="Develop your learning path"  />
      
        <Router />
      </Container>
    );
  }
}

export default App;
