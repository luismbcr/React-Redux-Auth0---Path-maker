import React from "react";
import { Header } from "semantic-ui-react";
import MainMenu from "./MainMenu";
const HeaderComponent = props => { 
  return (
    <>
      <Header as="h2">
        {props.title}
        <Header.Subheader>{props.subtitle}</Header.Subheader>
      </Header>
      <MainMenu />
    </>
  );
};

export default HeaderComponent;
