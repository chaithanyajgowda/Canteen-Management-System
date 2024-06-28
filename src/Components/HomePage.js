import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavPage from './NavPage';
import '../Styles/HomePage.css';
import '../App.css';

function HomePage() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/MenuItem');
  };

  return (
    <div className="App">
      <NavPage />
      <Container fluid className="main-section text-center text-black">
        <Row className="align-items-center justify-content-center min-vh-100">
          <Col md={6} lg={6} className="text-center order-lg-1">
            <h2 className="larger-text">Eat Tasty Dish Everyday</h2>
            <h1 className="largest-text">SHARE YOUR LOVE ABOUT FOOD</h1>
            <Button
              variant="warning"
              className="mt-3 btn-large bordered-btn"
              onClick={handleOrderClick}
            >
              Order Online
            </Button>
          </Col>
          <Col md={6} lg={5} className="d-flex justify-content-center order-lg-1">
            <img
              src="https://th.bing.com/th/id/OIP.F6VyuMUgr0Rx8wTNPJ8mBAHaIu?w=140&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Tasty Dish"
              className="img-fluid large-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
