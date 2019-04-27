import React, { useState, useEffect } from "react";
import {
  Loader,
  Button,
  Header,
  Container,
  Divider,
  Grid,
} from "semantic-ui-react";
import ModalCreate from "../modals/ModalCreate";
import PathList from '../lists/PathList';
import Auth from "../../auth/Auth";
const auth = new Auth();

const Dashboard = (props) => {
  const [dashboard, setDashboard] = useState({
    loading: true,
    popupOpen: false,
    profile: {}
  });

  //componetdidmount
  useEffect(() => {
    auth.getProfile((profile, error) =>setDashboard({...dashboard, loading: false, profile: profile })); 
  },[]);
  const handlePopup = () =>{
    setDashboard((laststate)=>{
      return {
        popupOpen: !laststate.popupOpen,
      }
    })
  }
  return (
    <div>
      {dashboard.loading ? (
        <Loader active inline="centered" />
      ) : (
        <>
        <Container className="path-page" textAlign="center">
          <Header as="h2" icon>
            Your learning paths
            <Header.Subheader>Let's achieve the next level</Header.Subheader>
          </Header>
          
        </Container>
        <Container className="path-page" textAlign="center">
         <Grid stackable>
           <Grid.Row >
              <Grid.Column width={5}>
              <Divider horizontal>Options</Divider>
          <ModalCreate  popupOpen={dashboard.popupOpen} handlePopup={handlePopup}>
          <Button
            color="teal"
            onClick={handlePopup}
            content="Create Path"
            icon="add"
            labelPosition="left"
          />
          </ModalCreate>
              </Grid.Column>
              <Grid.Column width={11}>
                <Divider horizontal>Your Paths</Divider>
                <PathList/>
              </Grid.Column>
           </Grid.Row>
         </Grid>
        </Container>
        </>
      )}
    </div>
  );
};

export default Dashboard;
