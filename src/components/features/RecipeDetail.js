import React from 'react';
import { useParams } from 'react-router-dom';
import { RECIPES } from '../../app/RECIPES';
//import {Card, CardBody, CardTitle, CardText } from 'reactstrap';
import RecipeCard from '../RecipeCard';
import RandomRecipeButton from '../RandomRecipe';
import LikeButton from './LikeButton';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = RECIPES.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Yikes it looks like we don't have that recipe</div>
  }

  return (
    <>
    <div style={{ width: '66%', margin: '0 auto' }}>
      <RecipeCard recipe={recipe} />
    </div>
    <LikeButton />
    <div>
      <p>What to Try something else? You know what to do...</p>
      <RandomRecipeButton />
    </div>
    </>
  )
}

export default RecipeDetail