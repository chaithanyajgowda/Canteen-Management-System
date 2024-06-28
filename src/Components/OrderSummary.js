import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, Button, Form, Container } from 'react-bootstrap';

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, total } = location.state || { cart: [], total: 0 };
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [token, setToken] = useState('');

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    // Generate a random token number (for example purposes)
    const newToken = Math.floor(Math.random() * 1000000) + 1;
    setToken(newToken);
  };

  useEffect(() => {
    if (token) {
      navigate('/order-confirmation', {
        state: {
          cart: cart,
          total: total,
          paymentMethod: paymentMethod,
          token: token,
        },
      });
    }
  }, [token, cart, total, paymentMethod, navigate]);

  return (
    <Container className="mt-4">
      <h2>Order Confirmation</h2>
      <Card className="my-4 border-black shadow-sm">
        <Card.Header>Order Details</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {cart.map((item) => (
              <ListGroup.Item key={item.id} className="order-item">
                
                  <h5>{item.name}</h5>
                  <div className="d-flex align-items-center">
                    <p className="mb-0">Quantity: {item.quantity}</p>
                    <p className="mb-0 ml-3">Price: ₹{item.price * item.quantity}</p>
                  </div>
               
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <h4>Total: ₹{total}</h4>
        </Card.Footer>
      </Card>
      <Card className="my-5 border-black shadow-sm">
        <Card.Header>Payment Method</Card.Header>
        <Card.Body>
          <Form>
            <Form.Check 
              type="radio"
              label="Cash"
              name="payment"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={handlePaymentChange}
            />
            <Form.Check 
              type="radio"
              label="UPI"
              name="payment"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={handlePaymentChange}
            />
          </Form>
        </Card.Body>
      </Card>
      {token && (
        <Card className="my-4 border-black shadow-sm">
          <Card.Body>
            <h4>Order Token: {token}</h4>
          </Card.Body>
        </Card>
      )}
      <Button className="btn btn-success mt-3" onClick={handleSubmit}>
        Submit
      </Button>
      <style jsx>{`
        .border-black {
          border-color: black !important;
        }
      `}</style>
    </Container>
  );
};

export default OrderSummary;

