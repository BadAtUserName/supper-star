import React from 'react';
import { useParams } from 'react-router-dom';
import { RECIPES } from '../../app/RECIPES';
import {Card, CardBody, CardTitle, CardText } from 'reactstrap';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = RECIPES.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Yikes it looks like we don't have that recipe</div>
  }

  return (
    
    <Card style={{ width: '66%', margin: '0 auto' }}>
      <CardBody>
        <CardTitle tag="h5">{recipe.name}</CardTitle>
        <CardText>{recipe.description}</CardText>
      </CardBody>

    </Card>
  )
}

export default RecipeDetail