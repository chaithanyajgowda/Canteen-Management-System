import { useNavigate,Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
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
    <Navbar 
    bg="danger" variant="dark" expand="lg" fixed="top">
        <Container>
        <Navbar.Brand href="/">
           Brand of taste
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='waves'>
    <section className="form-container" style={{
     
    }}>
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
        <button  type="submit" className='button-style'>
          Submit
        </button>
      </Form>
    </section>
    {/* <svg 
    style={{
      width:1520,
    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D9534f" fill-opacity="1" d="M0,64L26.7,74.7C53.3,85,107,107,160,138.7C213.3,171,267,213,320,234.7C373.3,256,427,256,480,224C533.3,192,587,128,640,122.7C693.3,117,747,171,800,181.3C853.3,192,907,160,960,165.3C1013.3,171,1067,213,1120,213.3C1173.3,213,1227,171,1280,128C1333.3,85,1387,43,1413,21.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg> */}
   </div>
    </>
  );
}

export default LoginForm;
