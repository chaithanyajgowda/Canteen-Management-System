import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = ({ cart, total }) => {
  const [paymentMode, setPaymentMode] = useState('cash'); // Default payment mode is cash
  const navigate = useNavigate();

  const handlePayment = () => {
    // Handle payment logic here, for demo, just alert payment success
    alert(`Payment successful with ${paymentMode.toUpperCase()}!`);
    // You can clear cart or perform other actions related to payment completion
    navigate('/'); // Navigate back to home after payment
  };

  return (
    <div className="container">
      <h2>Payment Details</h2>
      <div className="order-details">
        <h3>Order Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ₹{total}</p>
      </div>
      <div className="payment-options">
        <h3>Select Payment Mode:</h3>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMode"
              value="cash"
              checked={paymentMode === 'cash'}
              onChange={() => setPaymentMode('cash')}
            />
            Cash
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMode"
              value="upi"
              checked={paymentMode === 'upi'}
              onChange={() => setPaymentMode('upi')}
            />
            UPI
          </label>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handlePayment}>
        Confirm Payment
      </button>
    </div>
  );
};

export default OrderSummary;
