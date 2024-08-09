import React from 'react';
import RecipeList from './components/RecipeList';
import { RECIPES } from './app/RECIPES';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header /> {/* Use the Header component here */}
      <h1 className="center-text">Hello!</h1> 
      <h1 className="center-text">You are a Supper Star!</h1>
      <Container>
        <Row className="justify-content-center">
          <Col md="4" sm="6" xs="10">
          <Search />
          </Col>
        </Row>
      </Container>
      
      <RecipeList />
    </div>
  );
}
export default App; 