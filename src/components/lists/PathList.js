import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Card, Loader, Popup,Progress } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import * as pathActions from "../../actions/path";

const PathList = props => {
  useEffect(() => {
    //Load path list here
    props.getPaths();
  }, []);
  const checkProgress = (items)=> {
    const totalTasksCompleted = items.filter((item)=> ( item.status !== 0 && item.status !== 1 && item.status !== 4 )); 
    const totalItemsNotDeleted = items.filter((item)=> ( item.status !== 4 ));
    const progress =  (totalTasksCompleted.length / totalItemsNotDeleted.length) *100;
    return <Progress percent={progress} progress />
   
  }
  return (
    <div>
      {props.paths.length > 0 ? (
            
        <Grid columns="three" className="paths-list">
          <Grid.Row>
            {props.paths.map(path => (
              <Grid.Column key={path._id}>
                <Card
                  link
                  onClick={() => props.history.push(`path/${path._id}`)}
                >
                  <Popup
                    position="top center"
                    key={path.title}
                    className="progress-popup"
                    trigger={
                      <Card.Content>
                        <Card.Header>{path.title}</Card.Header>
                      </Card.Content>
                    }
                    header={path.description}
                    content={checkProgress(path.items)}
                  />
                </Card>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      ) : props.isLoading ? (
        <Loader active inline="centered" />
      ) : (
        <p>There are no paths</p>
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
