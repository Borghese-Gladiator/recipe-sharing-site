import React from "react";
import SidebarDashboard from '../components/SidebarDashboard';

import {
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
// Sidebar icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import HistoryIcon from '@material-ui/icons/History';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
// declared here && SidebarDashboard - unable to pass since SidebarDashboard drawerWidth is inside useStyles()
const drawerWidth = 240;

export default function DashboardPage({ match: { url } }) {
  const routeData = [
    { text: 'DASHBOARD', link: `${url}/home`, iconFunc: () => { return <DashboardIcon /> } },
    { text: 'PROFILE', link: `${url}/profile`, iconFunc: () => { return <AccountBoxIcon /> } },
    { text: 'HISTORY', link: `${url}/history`, iconFunc: () => { return <HistoryIcon /> } },
    { text: 'SOCIAL', link: `${url}/social`, iconFunc: () => { return <PeopleIcon /> } },
  ]
  
  return (
    <div style={{backgroundColor: "#DAE3E7"}}>
      <SidebarDashboard
        drawerWidth={drawerWidth}
        routeData={routeData}
      />
      <main style={{marginLeft: drawerWidth}}>
        <Route path={`${url}/home`} component={HomeDashboard} />
        <Route path={`${url}/profile`} component={ProfileDashboard} />
        <Route path={`${url}/history`} component={HistoryDashboard } />
        <Route path={`${url}/social`} component={SocialDashboard} />
        <Route path={`${url}/`} component={HomeDashboard} exact />
      </main>
    </div>
  );
}
