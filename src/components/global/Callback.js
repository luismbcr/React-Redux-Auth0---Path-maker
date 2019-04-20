import React, { Component } from "react";
import {AuthContext} from "../../context/auth";
import { Loader } from 'semantic-ui-react';

 class Callback extends Component {
  static contextType = AuthContext;
  componentDidMount() {
      const { handleAuthentication } =  this.context;
      if(/access_token|id_token|error/.test(this.props.location.hash)){
        handleAuthentication(this.props.history);
      } else{
          throw new Error("invalid URL")
      }
  }
  render() {
    return <Loader active inline='centered' /> ;
  }
  
}
export default Callback