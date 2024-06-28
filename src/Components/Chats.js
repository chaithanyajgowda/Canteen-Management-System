import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';

function Chats(){
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
  
    const menuItems = [
      {id: 1, name: 'Coconut water', description: 'Refreshing drink', price: 40, image: 'https://tse1.mm.bing.net/th?id=OIP.8DPrqSoH6pTC0yt3x-WaBQHaE8&pid=Api&P=0&h=180' },
      { id: 2, name: 'Lassi', description: 'Creamy yogurt drink,Sweet or Salty', price: 20, image: 'https://tse2.mm.bing.net/th?id=OIP.OnFpGTGtmxjladh3IJk2zAHaHa&pid=Api&P=0&h=180' },
      { id: 3, name: 'Mocktail', description: 'Non-Alchoholic cocktail', price: 45, image: 'https://tse4.mm.bing.net/th?id=OIP.D9mW-Bo5rqijGEiDB_ItdAHaD4&pid=Api&P=0&h=180' },
      { id: 4, name: 'Sugarcane juice', description: 'Sweet,trophical refreshment', price: 50, image: 'https://tse2.mm.bing.net/th?id=OIP._nnchQVIcNhfS3Ed47TWhAHaHa&pid=Api&P=0&h=180' },
      { id: 5, name: 'Butter milk', description: 'Tangy dairy drink', price: 15, image: 'https://tse1.mm.bing.net/th?id=OIP.GF2UVPaF94Jmm-93nh5RqgHaE8&pid=Api&P=0&h=180' },
      { id: 6, name: 'juice', description: 'Fresh drinks from presses fruit', price: 40, image: 'https://tse1.mm.bing.net/th?id=OIP.AQzO45DVmtbbmZdRzaifFwHaEu&pid=Api&P=0&h=180'},
    ];
  
    const addToCart = (item) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
          return prevCart.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          );
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
      });
      setTotal(total + item.price);
    };
  
    const removeFromCart = (item) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
        if (existingItem.quantity === 1) {
          return prevCart.filter(cartItem => cartItem.id !== item.id);
        } else {
          return prevCart.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
          );
        }
      });
      setTotal(total - item.price);
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Cart cart={cart} total={total} addToCart={addToCart} removeFromCart={removeFromCart} />
          </div>
          <div className="col-md-8">
            <div className="menu">
              <h2>Popular Orders</h2>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.id} className="menu-item">
                    <img src={item.image} alt={item.name} className="menu-image" />
                    <div className="menu-details">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <p>₹{item.price}</p>
                    </div>
                    <button className="btn btn-primary" onClick={() => addToCart(item)}>
                      Add to cart
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <style jsx>{`
          .container {
            margin-top: 20px;
          }
          .menu {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
            background-color: #f9f9f9;
          }
          .menu-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
          }
          .menu-item:last-child {
            border-bottom: none;
          }
          .menu-image {
            width: 150px;
            border-radius: 10px;
            height: 100px;
            margin-right: 15px;
          }
          .menu-details {
            flex: 1;
          }
          .menu-item h4 {
            margin: 0;
          }
          .menu-item p {
            margin: 0;
          }
          .btn-sm {
            margin: 0 5px;
          }
        `}</style>
      </div>
    );
  };

export default Chats