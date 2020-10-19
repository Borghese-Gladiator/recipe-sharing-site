import React from "react";
import {
  Route,
  Link
} from "react-router-dom";
import SidebarDashboard from '../components/SidebarDashboard';

import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DashboardIcon from '@material-ui/icons/Dashboard';

function HomeDashboard() {
  return (
    <h2>HOME</h2>
  )
}

function HistoryDashboard() {
  return (
    <h2>History</h2>
  )
}

function ProfileDashboard() {
  return (
    <h2>PROFILE</h2>
  )
}

function SocialDashboard() {
  return (
    <div>
      <h3>SOCIAL</h3>
    </div>
  )
}



export default function DashboardPage({ match: { url } }) {
  const routeData = [
    { text: 'HOME', link: `${url}/home`, iconFunc: () => { return <HomeIcon /> } },
    { text: 'PROFILE', link: `${url}/profile`, iconFunc: () => { return <InfoIcon /> } },
    { text: 'HISTORY', link: `${url}/history`, iconFunc: () => { return <FastfoodIcon /> } },
    { text: 'SOCIAL', link: `${url}/`, iconFunc: () => { return <DashboardIcon /> } },
  ]
  
  return (
    <div style={{backgroundColor: "#DAE3E7"}}>
      <SidebarDashboard
        routeData={routeData}
      />
      <Route path={`${url}/home`} component={HomeDashboard} />
      <Route path={`${url}/profile`} component={ProfileDashboard} />
      <Route path={`${url}/history`} component={HistoryDashboard } />
      <Route path={`${url}/social`} component={SocialDashboard} />
      <Route path={`${url}/`} component={HomeDashboard} exact />
    </div>
  );
}
