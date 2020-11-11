import React from "react";
// Translation with i18n
import { withTranslation } from 'react-i18next'
// Routing
import { HashRouter, Route } from "react-router-dom";
// Custom components (menu: nav and sidebar)
import NavigationMenu from "./components/NavigationMenu"
import Footer from './components/Footer'
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
import logo from './TastePerfect-Logo.png'

function App(props) {
  // custom hook to call i18n changeLanguage function
  const { t } = props;
  const langCallback = (event) => {
    let newLang = event.target.value;
    console.log(newLang)
    console.log("HERE")
    props.i18n.changeLanguage(newLang)
  }

  const navMenuRouteData = [
    { text: t('navMenu.HOME'), link: '/', iconFunc: () => { return <HomeIcon /> } },
    { text: t('navMenu.BROWSE'), link: "/browse", iconFunc: () => { return <PageviewIcon /> } },
    { text: t('navMenu.DASHBOARD'), link: "/dashboard", iconFunc: () => { return <DashboardIcon /> } },
    { text: t('navMenu.PROFILE'), link: "/profile", iconFunc: () => { return <AccountBoxIcon /> } },
    { text: t('navMenu.HISTORY'), link: "/history", iconFunc: () => { return <HistoryIcon /> } },
    { text: t('navMenu.SOCIAL'), link: "/social", iconFunc: () => { return <PeopleIcon /> } },
  ]
  
  return (
    <HashRouter initialEntries={['/drafts']} initialIndex={0}>
      <div style={{backgroundColor: "#DAE3E7"}}>
        <NavigationMenu
          routeData={navMenuRouteData}
          logo={logo}
          langCallback={langCallback}
          registerText={t('navMenu.register')}
          signInText={t('navMenu.signIn')}
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
          <Footer />
        </NavigationMenu>
      </div>
    </HashRouter>
  );
}

export default withTranslation()(App);