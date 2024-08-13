import React from "react";
import { Button } from "reactstrap";
import { RECIPES } from "../app/RECIPES";
import { useNavigate } from "react-router-dom";


const RandomRecipeButton = () => {
  const navigate = useNavigate();

  const handleRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * RECIPES.length);
    const randomRecipe = RECIPES[randomIndex];
    navigate(`/recipe/${randomRecipe.id}`);

  };

  return (
    <Button color="primary" onClick={handleRandomRecipe}>
      In the mood for a little recipe roulette? 
    </Button>
  )

}

export default RandomRecipeButton