import React from "react";
import SidebarDashboard from '../components/SidebarDashboard';

import {
  Route,
  Link
} from "react-router-dom";
import HomeDashboard from '../components/Dashboard/HomeDashboard'
import ProfileDashboard from '../components/Dashboard/ProfileDashboard'
import HistoryDashboard from '../components/Dashboard/HistoryDashboard'
import SocialDashboard from '../components/Dashboard/SocialDashboard'
// Sidebar icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import HistoryIcon from '@material-ui/icons/History';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
