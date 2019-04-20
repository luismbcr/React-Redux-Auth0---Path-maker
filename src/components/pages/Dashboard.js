import React, { useState, useEffect } from "react";
import { Loader } from 'semantic-ui-react'
import Auth from "../../auth/Auth";
const auth = new Auth();

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({
    loading: true,
    profile: {}
  });

  //componetdidmount
  useEffect(() => {
    auth.getProfile((profile,error)=> setDashboard({loading:false, profile: profile}));
  });

  return (<div>
    {dashboard.loading ?  <Loader active inline='centered' /> : `Welcome ${dashboard.profile.nickname}` }
  </div>);
};

export default Dashboard;
