import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const NavPage = () => {
  const navigate = useNavigate(); // Initialize navigate from useNavigate

  const handleLogout = () => {
    // Perform any logout actions (e.g., clear session, etc.)
    // Redirect to the login form
    navigate('/'); // Navigate to '/login' route
  };
 
  
    const handleOrderClick = () => {
      navigate('/MenuItem');
    };

  return (
    <>
      <Navbar  variant="dark" expand="lg" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/">Brand of Taste</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#account-details">My Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
              <Button variant="warning" className="mt-1" onClick={handleOrderClick}>MENU</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: '70px' }}>
        {/* Content below navbar goes here */}
      </div>
    </>
  );
}

export default NavPage;
