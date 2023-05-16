import logo from './logo.svg'
import './App.css'
import Button from './Button'
import styled from 'styled-components'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Categories from './components/Categories'
import SimpleTasty from './components/SimpleTasty'
import RecipeItem from './components/RecipeItem'
import ChefInformation from './components/ChefInformation'
import Instagram from './components/Instagram'
import DeliciousRecipes from './components/DeliciousRecipes'
function App() {
  return (
    <>
      <Header />
      <Recipes />
      <Categories />
      <SimpleTasty />
      <ChefInformation />
      <Instagram />
      <DeliciousRecipes />
    </>
  )
}

export default App
