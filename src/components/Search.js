import { useState } from "react";
import { RECIPES } from "../app/RECIPES";
import RecipeCard from "./RecipeCard";
import { Input, Container, Row, Col  } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import RecipeList from "./RecipeList";
import RecipeCardMini from "./features/RecipeCardMini";
import RandomRecipeButton from "./RandomRecipe";


const Search = () => {
  const [searchItem, setSearchItem] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState(RECIPES)

  //when clicked on move to the recipe page.
  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchItem(searchTerm)

    //Filter the recipes based on the search term
    const results = RECIPES.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm)
    );
    setFilteredRecipes(results);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md="12">
            <Input
              type="text"
              value={searchItem}
              onChange={handleInputChange}
              placeholder="Type here to search"
              className="mb-3"
            />
            <RandomRecipeButton />
          </Col>
        </Row>
        <Row>
          {filteredRecipes.map((recipe, index) => (
            <Col md="4" key={index} className="mb-3">
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <RecipeCardMini recipe={recipe} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

  //search through the recipes that are listed and reduce list on page
 /* return (
    
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
} */

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

 //Each recipe listed on home page should not include all instuctions just the description. Set up router on each click to move to page. 