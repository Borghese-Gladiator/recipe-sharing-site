import React from "react";
import {
  HashRouter,
  Route,
  BrowserRouter
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import NavigationMenu from "./components/NavigationMenu"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RecipesPage from './pages/RecipesPage';
import DashboardPage from './pages/DashboardPage';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import logo from './img/TastePerfect Logo.png'

import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DashboardIcon from '@material-ui/icons/Dashboard';

const routeData = [
  { text: 'HOME', link: '/', iconFunc: () => { return <HomeIcon /> } },
  { text: 'ABOUT', link: '/about', iconFunc: () => { return <InfoIcon /> } },
  { text: 'RECIPES', link: '/recipes', iconFunc: () => { return <FastfoodIcon /> } },
  { text: 'DASHBOARD', link: '/dashboard', iconFunc: () => { return <DashboardIcon /> } },
]

export default function App(props) {
  const [darkMode, setDarkMode] = React.useState(false);
  const [lang, setLang] = React.useState('en');

  return (
    <BrowserRouter initialEntries={['/drafts']} initialIndex={0}>
      <div style={{backgroundColor: "#DAE3E7"}}>
        <NavigationMenu
          routeData={routeData}
          logo={logo}
          onSelectLanguage={setLang}
          setDarkMode={setDarkMode}
        />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/recipes" component={RecipesPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </div>
    </BrowserRouter>
  );
}