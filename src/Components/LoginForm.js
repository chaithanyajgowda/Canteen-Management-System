import { useNavigate,Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Handle login logic here
    // For demo purposes, navigate to the home page on submit
    navigate('/home');
  };

  return (
  
   <>
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
        <Navbar.Brand href="/">
           Brand of taste
          </Navbar.Brand>
        </Container>
      </Navbar>
    <section className="form-container">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control className="control"  type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="control" type="password" placeholder="Password" />
        </Form.Group>
        <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        <Button variant="primary" type="submit" className='button-style'>
          Submit
        </Button>
      </Form>
    </section>
    </>
  );
}

export default LoginForm;
