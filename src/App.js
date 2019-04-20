import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Router from "./Router";
import Header from "./components/global/Header";
import Container from "./components/global/Container";
import {AuthContext} from './context/auth';
import Auth from "./auth/Auth";
const auth = new Auth();

class App extends Component {
  render() {
    return (
      <AuthContext.Provider value={auth}>
        <Container>
          <Header
          title="Path Maker"
          subtitle="Develop your learning path"  />
          <Router />
        </Container>
      </AuthContext.Provider>
    );
  }
}

export default App;
