import React from "react";
import {withRouter} from 'react-router-dom';
import { Button, Header, Icon, Segment } from "semantic-ui-react";

const Home = (props) => {
  const linkCreatePath = "/dashboard";
  return (
    <>
      <Segment placeholder>
        <Header icon>
          <Icon name="book" />
          Create your learning paths with this tool
        </Header>
        <Segment.Inline>
          <Button onClick={()=>props.history.push(linkCreatePath)} primary>My paths</Button>
          <Button disabled>View public paths</Button>
        </Segment.Inline>
      </Segment>
      <Header as="h3" dividing>
        Advantages
      </Header>
      <Segment vertical>
        Develop your custom path and then keep tracking of your progress
      </Segment>
      <Segment vertical>
        This is a free tool
      </Segment>
      <Segment vertical>
        You could share yor path with friends
      </Segment>
    </>
  );
};

export default withRouter(Home);