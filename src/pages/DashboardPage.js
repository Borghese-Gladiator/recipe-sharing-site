import React from "react";
import {
  Route,
  Link
} from "react-router-dom";
import SidebarDashboard from '../components/SidebarDashboard';

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

const routeData = [
  { id: 'home', name: 'Home' },
  { id: 'profile', name: 'profile' },
  { id: 'history', name: 'history' },
  { id: 'social', name: 'social' }
]

export default function DashboardPage({ match: { url } }) {
  return (
    <div style={{backgroundColor: "#DAE3E7"}}>
      <ul>
        {routeData.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${url}/home`} component={HomeDashboard} />
      <Route path={`${url}/profile`} component={ProfileDashboard} />
      <Route path={`${url}/history`} component={HistoryDashboard } />
      <Route path={`${url}/social`} component={SocialDashboard} />
      <Route path={`${url}/`} component={HomeDashboard} exact />
    </div>
  );
}
