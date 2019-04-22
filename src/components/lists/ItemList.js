import React from "react";
import { List } from "semantic-ui-react";

const ItemList = props => {
  const { topics } = props;
  const checkStatus = (status)=>{
    switch (status) {
        case 0:
            return "Not studied yet";
        case 1:
            return "In progress";
        case 2:
            return "Completed";
        default:
            return "Not Found;"
    }
  }
  return (
    <List celled>
      {
         topics && topics.map( (item) => {
             return (<List.Item key={item.text}>
                <List.Header>{item.text}</List.Header>
                {checkStatus(item.status)}
              </List.Item>)
          })
      }
    </List>
  );
};

export default ItemList;
