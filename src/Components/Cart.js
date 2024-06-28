import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cart, total, addToCart, removeFromCart }) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order', { state: { cart, total } });
  };

  const handleGoBack = () => {
    navigate('/MenuItem'); // Navigate to the MenuItem page
  };

  return (
    <div className="cart">
      <h2>Your Food Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div>{item.name} - ₹{item.price} x {item.quantity}</div>
            <div>
              <button
                className="btn btn-sm"
                style={{
                  backgroundColor: "#D9534f",
                  borderRadius: 5,
                  color: "white",
                  width: 25,
                }}
                onClick={() => removeFromCart(item)}
              >
                -
              </button>
              <button
                className="btn btn-sm"
                style={{
                  backgroundColor: "#D9534f",
                  borderRadius: 5,
                  color: "white",
                  width: 25,
                }}
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <button
        style={{
          backgroundColor: "#ffc107",
          borderRadius: 5,
          marginRight: 10,
        }}
        onClick={handleOrderNow}
      >
        Order Now
      </button>
      <button
        style={{
          backgroundColor: "#007bff",
          borderRadius: 5,
        }}
        onClick={handleGoBack}
      >
        Back
      </button>

      <style>
        {`
        .cart {
          margin-right: 250px;
          width: 400px;
        }
        .cart, .menu {
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 5px;
          background-color: #f9f9f9;
          margin-top: 20px;
        }
        .cart-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ddd;
          padding: 10px 0;
        }
        .cart-item:last-child {
          border-bottom: none;
        }
        .btn-sm {
          margin: 0 5px;
        }
        `}
      </style>
    </div>
  );
};

export default Cart;
