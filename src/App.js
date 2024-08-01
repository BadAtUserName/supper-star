import React from 'react';
import RecipeList from './components/RecipeList';
import { RECIPES } from './app/RECIPES';
import { Container } from 'reactstrap';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Use the Header component here */}
      <h1 className="center-text">Hello!</h1> 
      <h1 className="center-text">You are a Supper Star!</h1>
      <RecipeList />
    </div>
  );
}
export default App; 