import React from "react";
import {
  HashRouter,
  Route
} from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RecipesPage from './pages/RecipesPage';
import DashboardPage from './pages/DashboardPage';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'en',
      darkMode: false
    }
    this.onSelectLanguage = this.onSelectLanguage.bind(this)
    this.setDarkMode = this.setDarkMode.bind(this)
  }
  onSelectLanguage(e) {
    console.log(e)
    this.setState({
      lang: e
    })
  }
  
  setDarkMode(e) {
    console.log(e)
    this.setState({
      darkMode: e
    })
  }

  render() {
    const lang = this.state.lang
    console.log(process.env.PUBLIC_URL)
    return (
      <HashRouter initialEntries={['/drafts']} initialIndex={0}>
        <div style={{backgroundColor: "#DAE3E7"}}>
          <NavigationMenu
            onSelectLanguage={this.onSelectLanguage}
            setDarkMode={this.setDarkMode}
          />
          <Route exact path="/">
            <HomePage lang={lang} />
          </Route>
          <Route path="/about">
            <AboutPage lang={lang} />
          </Route>
          <Route path="/recipes">
            <RecipesPage lang={lang} />
          </Route>
          <Route path="/dashboard">
            <DashboardPage lang={lang} />
          </Route>
        </div>
      </HashRouter>
    );
  }
}