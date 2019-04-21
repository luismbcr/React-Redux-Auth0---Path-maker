import React from "react";
import { Header, List, Dropdown } from "semantic-ui-react";

const status = [
    {
        key: 'Open',
        text: 'Not started yet',
        value: 'Open',
      },
      {
        key: 'In progress',
        text: 'In progress',
        value: 'In progress',
      },
      {
        key: 'Completed',
        text: 'Completed',
        value: 'Completed',
      }
]
const PathDetails = props => {
  return (
    <div>
      <Header as="h1">React Path</Header>
      <List divided relaxed>
        <List.Item>
          <List.Content floated="right">
          <Dropdown
                placeholder='Select Status'
                fluid
                selection
                value="In progress"
                options={status}
            />
          </List.Content>
          <List.Icon name="tasks" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header >Create first component</List.Header>
            <List.Description >In progress</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
          <Dropdown
                placeholder='Select Status'
                fluid
                selection
                value="Open"
                options={status}
            />
          </List.Content>
          <List.Icon name="video" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header >How to use ref?</List.Header>
            <List.Description >Not started yet</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
          <Dropdown
                placeholder='Select Status'
                fluid
                selection
                value="Open"
                options={status}
            />
          </List.Content>
          <List.Icon name="book" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header >How to use ref?</List.Header>
            <List.Description >Not started yet</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
};

export default PathDetails;
