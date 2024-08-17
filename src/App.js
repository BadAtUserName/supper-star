import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import { RECIPES } from './app/RECIPES';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import RecipeDirectoryPage from './pages/RecipeDirectoryPage';
import Search from './components/Search';
import RecipeDetail from './components/features/RecipeDetail';
import AboutPage from './pages/AboutPage';
//import RecipeDetail from './components/features/RecipeDetail';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Use the Header component here */}
        <h1 className="center-text">Hello!</h1>
        <h1 className="center-text">You are a Supper Star!</h1>
        <Container>
          <Row className="justify-content-center">
            <Col md="10" sm="10" xs="10" className="text-center">

              <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/recipes" element={<RecipeDirectoryPage />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path='about' element={<AboutPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>


      </div>
    </Router>
  );
}
export default App;

///your router is really broken and you need to fix it
//<Route path="/" element={<Search />} />
//<Route path="/recipe/:id" element={<RecipeDetail />} />