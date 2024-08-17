import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import ZoolanderComputer from '../app/img/Zoolander_Computer.mp4';

const AboutPage = () => {
  return (
    <Container>
      <Row className='row-content'>
        <Col sm='6'>
          <h3>HI!!!</h3>
          <p>
            GOSH! What a long ass day we had a work?<br></br>
            Right?<br></br>
            I'm assuming since you are here that you like cooking even
            if its just been a hell of a day. I bet you are a touch mentally
            fatigued, I mean who isn't. Well we are here to help. We are a collection of recipes, currently just our own, that you can browse and choose from..Or if that's not for you. We have a fun little roulette button where the computer chooses for you and voila choices made!
          </p>
        </Col>

        <Col sm='6'>
          <Card>
            <CardHeader className='bg-light text-black'>
              <h3>The Recipes are in the computer</h3>
            </CardHeader>

            <CardBody>
              {/* Use the imported video */}
              <video
                controls
                width="100%"
                height="auto"
                src={ZoolanderComputer}
                alt='Zoolander Computer Video'
              >
                Your browser does not support the video tag.
              </video>*
            </CardBody>
          </Card>

        </Col>
        <Col>
          <Card className='bg-light mt-3'>
            <CardBody>
              <blockquote className='blockquote'>
                <p>
                  “Dorothy says she ducks invitations to dine with young married people because she can’t, at her age, take the casserole any more—she described one composed of pork chops and canned Bing cherries, after which she came home and was sick.”
                </p>
                <footer className='blockquote-footer'>
                  ― Julia Child,{' '}
                  <cite title='Source Title'>
                    As Always, Julia: The Letters of Julia Child & Avis DeVoto
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className='row-content'>
        <Col xs='12'>
          <h3>Happy Eating</h3>

        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage