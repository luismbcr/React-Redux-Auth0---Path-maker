import React, { useEffect } from "react";
import { Header, Loader, Button} from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as pathActions from "../../actions/path";
import ItemForm from "../forms/ItemForm";
import ItemList from "../lists/ItemList";
import { withRouter } from "react-router-dom";
const PathDetails = props => {
  useEffect(() => {
    const { id } = props.match.params;
    if(props.paths.length>0){
      const path = props.paths.filter((path)=> path._id === id);
      props.setPathDetail(path[0])
    }else{
      //here needs to call API
      props.setPathDetailAsync(id);
    }
  }, [])
  const removeItem = (idItem)=> {
    const { id } = props.match.params;
    const element = {...props.details};
    
    const updateElement = element.items.map((item)=>{
      if(item.text === idItem){
        //4 is removed status
        item.status=4;
      }
      return item;
    });
    props.removeItem(id,updateElement);
  }
  const updateItemStatus = (idItem) =>{
    const { id } = props.match.params;
    const element = {...props.details};
    const updateElement = element.items.map((item)=>{
      if(item.text === idItem.text){
        let newStatus;
        switch (item.status) {
          default:
          newStatus = 0
          break;
          case 0:
            newStatus = 1
            break;
          case 1:
            newStatus = 2
            break;
        }
        item.status = newStatus;
      }
      return item;
    });
    props.updateItem(id, {"items": updateElement});
  }
  const removePath = ()=>{
    const { id } = props.match.params;
    const paths = props.paths.filter((path)=> path._id !== id);
     props.removePath(id, paths);
     props.history.push('/dashboard');

  }
  return (
    <div>
      {props.isLoading && <Loader active inline="centered" />}
      <Header as="h1">{props.details.title || (!props.isLoading && "Wrong Path")}</Header>
      <Button onClick={removePath} floated="right" icon='trash' />
      <p>{props.details.description}</p>
      <ItemForm {...props} />
      <Header as="h2">My Topics</Header>
      <ItemList topics={props.details.items} removeItem={removeItem} updateItem={updateItemStatus} />
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