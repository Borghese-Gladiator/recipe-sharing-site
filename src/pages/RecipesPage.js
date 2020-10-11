import React from 'react'
import Container from '@material-ui/core/Container'
import RecipeList from '../components/RecipeList'

import { recipeData } from '../constants/recipeData'

export default function AboutPage(props) {
  return (
    <Container>
      <h2>RECIPES</h2>
      <RecipeList recipeData={recipeData} />
    </Container>
  )
}