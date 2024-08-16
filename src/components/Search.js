import { useState } from "react";
import { RECIPES } from "../app/RECIPES";
import RecipeCard from "./RecipeCard";
import { Input, Container, Row, Col  } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import RecipeList from "./RecipeList";
import RecipeCardMini from "./features/RecipeCardMini";

const Search = () => {
  const [searchItem, setSearchItem] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState(RECIPES)

  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchItem(searchTerm)

    //Filter the recipes based on the search term
    const results = RECIPES.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm)
    );
    setFilteredRecipes(results);
  }

  //search through the recipes that are listed and reduce list on page
  return (
    
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type here to search"
      />
      <div>
        {filteredRecipes.map((recipe, index) => (
          <Link key={index} to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <RecipeCardMini  recipe={recipe} />
          </Link>
        ))}
      </div>
      
    </div>
  )
}

  /*
  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type here to search" />
    
    <ul>
        {filteredRecipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  )
}
*/
export default Search

//need to figure out how then when clicked on move to the recipe page. Each recipe listed on home page should not include all instuctions just the description. Set up router on each click to move to page. 