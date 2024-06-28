import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const location = useLocation();
  const { cart, total, paymentMethod, token } = location.state || { cart: [], total: 0, paymentMethod: 'cash', token: '' };

  return (
    <div className="container">
      <h2>Order Confirmation</h2>
      <div>
        <h3>Token Number: {token}</h3>
        <h4>Payment Method: {paymentMethod}</h4>
        {paymentMethod === 'upi' && <p>Payment is done</p>}
      </div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
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
    </div>
  );
};

export default OrderConfirmation;
