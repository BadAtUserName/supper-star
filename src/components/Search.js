import { useState } from "react";
import { RECIPES } from "../app/RECIPES";
import { Input } from 'reactstrap';

const Search = () => {
  const [searchItem, setSearchItem] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState([])

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    //Filter the recipes based on the search term
    const results = RECIPES.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm)
    );
    setFilteredRecipes(results);
  }

  return (
    <div>
      <Input
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

export default Search