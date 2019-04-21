import React, { useEffect} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Card, Loader } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import * as pathActions from "../../actions/path";

const PathList = props => {
  useEffect(() => {
    //Load path list here
    props.getPaths();
  }, [])
  return (
    <div>
      
      {props.paths.length > 0 ? (
        <Grid  columns='three' divided>
        <Grid.Row>

      {props.paths.map(path => (
        <Grid.Column key={path.id}>
          <Card
            
            link
            onClick={() => props.history.push(`path/${path.id}`)}
          >
            <Card.Content>
              <Card.Header>{path.title}</Card.Header>
            </Card.Content>
          </Card>
          </Grid.Column>
          ))}
      
      </Grid.Row>
        </Grid>
      ) : (
        props.isLoading  ? <Loader active inline='centered'/> : <p>There are no paths</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  paths: state.paths.paths,
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
)(PathList);

export default withRouter(connectComponent);
