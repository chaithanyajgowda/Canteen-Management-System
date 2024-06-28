import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderSummary = () => {
  const location = useLocation();
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

  return (
    <div className="container">
      <h2>Order Summary</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="order-item">
            <div className="order-details">
              <h4>{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price * item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <h3>Total: ₹{total}</h3>
      </div>
      <div className="payment-method">
        <h4>Mode of Payment</h4>
        <div>
          <label>
            <input type="radio" name="payment" value="cash" checked={paymentMethod === 'cash'} onChange={handlePaymentChange} />
            Cash
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={handlePaymentChange} />
            UPI
          </label>
        </div>
      </div>
      <Link
        to={{
          pathname: '/order-confirmation',
          state: {
            cart: cart,
            total: total,
            paymentMethod: paymentMethod,
            token: token
          }
        }}
        className="btn btn-success mt-3"
        onClick={handleSubmit}
      >
        Submit
      </Link>
      <style jsx>{`
        .container {
          margin-top: 20px;
        }
        .order-item {
          border-bottom: 1px solid #ddd;
          padding: 10px 0;
        }
        .order-item:last-child {
          border-bottom: none;
        }
        .order-details {
          margin-bottom: 10px;
        }
        .total {
          margin-top: 20px;
        }
        .payment-method {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default OrderSummary;
