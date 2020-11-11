import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Container from '@material-ui/core/Container'
import RecipeCardList from '../../components/RecipeCardList'
import RecipePostPage from './RecipePostPage';

import { recipeData } from '../../constants/recipeData'

export default function BrowsePage(props) {
  let match = useRouteMatch();
  const { t } = props
  return (
    <div>
      <Container>
        <h2 style={{textAlign: "center"}}>{t("browse.recipes")}</h2>
        <RecipeCardList recipeData={recipeData} />
      </Container>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <RecipePostPage />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}