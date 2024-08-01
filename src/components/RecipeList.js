import { RECIPES } from '../app/RECIPES';
import RecipeCard from './RecipeCard';
import { Col, Row } from 'reactstrap'

const RecipeList = () => {
  return (
    <Row className='ms-auto'>
      {RECIPES.map((recipe) => {
        return (
          <Col md='5' className='m-4' key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Col>
        );
      })}
    </Row>
  )
}

export default RecipeList;