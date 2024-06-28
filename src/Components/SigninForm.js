import React from 'react';
import NavPage from './NavPage';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SigninForm() {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    // Handle signup logic here
    navigate('/home');
  };

  return (
    <>
    <div>
      <NavPage/>
    </div>
    <section className="form-container">
      <h1>Sign Up</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control className="control" type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicemail">
          <Form.Label>email</Form.Label>
          <Form.Control className="control" type="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="control" type="password" placeholder="Password" />
        </Form.Group>
        <button variant="primary" type="submit" style={{
          backgroundColor:"#D9534f",
          color:"white",
          borderRadius:5
        }}>
          Sign Up
        </button>
      </Form>
    </section>
    </>
  );
}

export default SigninForm;
