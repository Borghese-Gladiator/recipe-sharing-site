import React from "react";
import {
  HashRouter,
  Route
} from "react-router-dom";
// Custom menu: nav and sidebar
import NavigationMenu from "./components/NavigationMenu"
// Pages
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomeDashboard from './components/Dashboard/HomeDashboard'
import ProfileDashboard from './components/Dashboard/ProfileDashboard'
import HistoryDashboard from './components/Dashboard/HistoryDashboard'
import SocialDashboard from './components/Dashboard/SocialDashboard'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import logo from './img/TastePerfect Logo.png'
// Sidebar icons
import HomeIcon from '@material-ui/icons/Home'
import PageviewIcon from '@material-ui/icons/Pageview';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HistoryIcon from '@material-ui/icons/History';
import PeopleIcon from '@material-ui/icons/People';

const navMenuRouteData = [
  { text: 'HOME', link: '/', iconFunc: () => { return <HomeIcon /> } },
  { text: 'BROWSE', link: "/browse", iconFunc: () => { return <PageviewIcon /> } },
  { text: 'DASHBOARD', link: "/dashboard", iconFunc: () => { return <DashboardIcon /> } },
  { text: 'PROFILE', link: "/profile", iconFunc: () => { return <AccountBoxIcon /> } },
  { text: 'HISTORY', link: "/history", iconFunc: () => { return <HistoryIcon /> } },
  { text: 'SOCIAL', link: "/social", iconFunc: () => { return <PeopleIcon /> } },
]

export default function App(props) {
  const [lang, setLang] = React.useState('en');

  return (
    <HashRouter initialEntries={['/drafts']} initialIndex={0}>
      <div style={{backgroundColor: "#DAE3E7"}}>
        <NavigationMenu
          routeData={navMenuRouteData}
          logo={logo}
          onSelectLanguage={setLang}
        >
          <Route exact path="/" component={HomePage} />
          <Route path="/browse" component={BrowsePage} />
          <Route path="/dashboard" component={HomeDashboard} />
          <Route path="/profile" component={ProfileDashboard} />
          <Route path="/history" component={HistoryDashboard } />
          <Route path="/social" component={SocialDashboard} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forgotpassword" component={ForgotPasswordPage} />
        </NavigationMenu>
      </div>
    </HashRouter>
  );
}