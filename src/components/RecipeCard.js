import { Card, CardImg, CardText, CardImgOverlay, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem } from 'reactstrap';

const RecipeCard = ({ recipe }) => {
  const { name, description, prepTime, cookTime, totalTime, servings, ingredients, instructions, notes, image } = recipe;

  return (
    <Card>
      <CardImg
        width='100%'
        src={image}
        alt={name} />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardImgOverlay>
      <CardBody>
        <CardTitle tag='h5'>{name}</CardTitle>
        <CardSubtitle tag='h6' className='mb-2 text-muted'>{description}</CardSubtitle>
        <CardText>
          <strong>Prep Time: </strong> {prepTime} <br />
          <strong>Cook Time: </strong> {cookTime} <br />
          <strong>Total Time: </strong> {totalTime} <br />
          <strong>Servings: </strong> {servings} <br />
        </CardText>

        <CardTitle tag='h6'>Ingredients</CardTitle>
        <ListGroup>
          {ingredients.map((ingredient, index) => (
            <ListGroupItem key={index}>{ingredient}</ListGroupItem>
          ))}
        </ListGroup>

        <CardTitle tag='h6' className='mt-3'>Instructions</CardTitle>
        <CardText>
          {instructions.map((step, index) => (
            <CardText key={index}>{step}</CardText>
          ))}
        </CardText>
        
        {notes && notes.length > 0 && (
          <>
            <CardTitle tag="h6" className="mt-3">Notes</CardTitle>
            <CardText>
              {notes.map((note, index) => (
                <CardText key={index}>{note}</CardText>
              ))}
            </CardText>
          </>
        )}
      </CardBody>
    </Card>
  )
}

export default RecipeCard;