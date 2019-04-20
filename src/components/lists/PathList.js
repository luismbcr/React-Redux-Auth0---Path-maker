import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Card } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import * as pathActions from "../../actions/path";
const PathList = props => {
  return (
    <div>
      {props.paths.length > 0 ? (
        <Grid  columns='three' divided>
        <Grid.Row>
      
      {props.paths.map(path => (
        <Grid.Column>
          <Card
            key={path.id}
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
        "There are no paths"
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  paths: state.paths
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
