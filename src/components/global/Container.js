import React from "react";
import { Grid } from "semantic-ui-react";

const Container = (props) => {
  return (
    <Grid centered>
      <Grid.Column width={12}>
        {props.children}
      </Grid.Column>
    </Grid>
  );
};

export default Container;
