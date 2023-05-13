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
function App() {
  return (
    <>
      <Header />
      <Recipes />
      <Categories />
      <SimpleTasty />
      <ChefInformation />
    </>
  )
}

export default App
