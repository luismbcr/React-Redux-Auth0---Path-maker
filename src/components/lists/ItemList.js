import React from "react";
import { Button, List } from "semantic-ui-react";

const ItemList = props => {
  const { topics } = props;
  const checkStatus = status => {
    switch (status) {
      case 0:
        return "Not studied yet";
      case 1:
        return "In progress";
      case 2:
        return "Completed";
      default:
        return "Not Found;";
    }
  };
  return (
    <List celled>
      {topics &&
        topics.map(item => {
          return (
            //check if it was removed
            (item.status !== 4) && <List.Item className="clickable-item" key={item.text} onClick={()=>props.updateItem(item)}  >
              <List.Content floated="right">
                <Button.Group>
                  <Button onClick={() => props.removeItem(item.text) } color='black'>Remove</Button>
                </Button.Group>
              </List.Content>
              <List.Header>{item.text}</List.Header>
              {checkStatus(item.status)}
            </List.Item>
          );
        })}
    </List>
  );
};

export default ItemList;
