import React from 'react'
import Container from '@material-ui/core/Container'
import RecipeCardList from '../components/RecipeCardList'

import { recipeData } from '../constants/recipeData'

export default function AboutPage(props) {
  const { lang } = props
  return (
    <Container>
      <h2>RECIPES</h2>
      <RecipeCardList recipeData={recipeData} />
    </Container>
  )
}