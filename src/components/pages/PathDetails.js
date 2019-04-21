import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as pathActions from "../../actions/path";
import { withRouter } from "react-router-dom";
const PathDetails = props => {
  useEffect(() => {
    const { id } = props.match.params;
    if(props.paths.length>0){
      const path = props.paths.filter((path)=> path.id === id);
      props.setPathDetail(path[0])
    }else{
      //here needs to call API
      props.setPathDetailAsync(id);
    }
  }, [])
  return (
    <div>
      <Header as="h1">{props.details.title || 'Not found'}</Header>
      <p>{props.details.description}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  paths: state.paths.paths,
  details: state.paths.pathDetail,
  isLoading: state.paths.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...pathActions
    },
    dispatch
  );


const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PathDetails);

export default withRouter(connectComponent);