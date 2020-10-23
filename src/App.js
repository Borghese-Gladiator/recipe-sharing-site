import React from "react";
// Translation with i18n
import { withTranslation, Trans } from 'react-i18next'
// Routing
import { HashRouter, Route } from "react-router-dom";
// Custom menu: nav and sidebar
import NavigationMenu from "./components/NavigationMenu"
// Pages
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomeDashboard from './pages/Dashboard/HomeDashboard'
import ProfileDashboard from './pages/Dashboard/ProfileDashboard'
import HistoryDashboard from './pages/Dashboard/HistoryDashboard'
import SocialDashboard from './pages/Dashboard/SocialDashboard';
// Sidebar icons
import HomeIcon from '@material-ui/icons/Home'
import PageviewIcon from '@material-ui/icons/Pageview';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HistoryIcon from '@material-ui/icons/History';
import PeopleIcon from '@material-ui/icons/People';
// super hack
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import logo from './img/TastePerfect Logo.png'

const navMenuRouteData = [
  { text: 'HOME', link: '/', iconFunc: () => { return <HomeIcon /> } },
  { text: 'BROWSE', link: "/browse", iconFunc: () => { return <PageviewIcon /> } },
  { text: 'DASHBOARD', link: "/dashboard", iconFunc: () => { return <DashboardIcon /> } },
  { text: 'PROFILE', link: "/profile", iconFunc: () => { return <AccountBoxIcon /> } },
  { text: 'HISTORY', link: "/history", iconFunc: () => { return <HistoryIcon /> } },
  { text: 'SOCIAL', link: "/social", iconFunc: () => { return <PeopleIcon /> } },
]

function App(props) {
  // custom hook to call i18n changeLanguage function
  const [lang, setLang] = React.useState('en');
  const langCallback = (event) => {
    let newLang = event.target.value;
    console.log(newLang)
    console.log("HERE")
    setLang(newLang)
    props.i18n.changeLanguage(newLang)
  }
  
  const { t } = props
  return (
    <HashRouter initialEntries={['/drafts']} initialIndex={0}>
      <div style={{backgroundColor: "#DAE3E7"}}>
        <NavigationMenu
          routeData={navMenuRouteData}
          logo={logo}
          langCallback={langCallback}
        >
          <Route exact path="/" render={(props) => <HomePage {...props} t={t} /> } />
          <Route path="/browse" render={(props) => <BrowsePage {...props} t={t} /> } />
          <Route path="/dashboard" render={(props) => <HomeDashboard {...props} t={t} /> } />
          <Route path="/profile" render={(props) => <ProfileDashboard {...props} t={t} /> } />
          <Route path="/history" render={(props) => <HistoryDashboard {...props} t={t} /> } />
          <Route path="/social" render={(props) => <SocialDashboard {...props} t={t} /> } />
          <Route path="/signin" render={(props) => <SigninPage {...props} t={t} /> } />
          <Route path="/register" render={(props) => <RegisterPage {...props} t={t} /> } />
          <Route path="/forgotpassword" render={(props) => <ForgotPasswordPage {...props} t={t} /> } />
        </NavigationMenu>
      </div>
    </HashRouter>
  );
}

export default withTranslation()(App);