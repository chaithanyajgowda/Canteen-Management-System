import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import NavPage from './NavPage';

function Salads() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
  
    const menuItems = [
      { id: 1, name: 'Mini meal', description: 'Simple, satisfying, balanced', price: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEUgQP5MvxPY3dk0LTO-oGfBxFM9Rr1Yg-w&s' },
    { id: 2, name: 'Full meal', description: 'Complete, hearty and fulfilling spread', price: 110, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjSg6-Ogalxoxk7YQMF-a4-qeVUCBZUTYYw&s' },
    { id: 3, name: 'Chicken biriyani', description: 'Aromatic and flavorful rice', price: 90, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjL9M45o7b4quPOgGmzVxwEl5UWPLqDcDsw&s' },

    { id: 4, name: 'Butter naan', description: 'soft and buttery flatbread', price: 50, image: 'https://vaya.in/recipes/wp-content/uploads/2018/03/Butter-Naan-1.jpg' },
    { id: 5, name: 'Kabab', description: 'Spiced,succulent chicken', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGqAPmm6BE0EBs7cDd3RZCn5R4itYnwLgYw&s' },
    { id: 6, name: 'Chicken chilly', description: 'Spicy, tangy, and crispy chicken dish', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jUWo-qoqILA0beo2pChIp5WuNZUir39EGg&s' },
    { id: 7, name: 'Chicken ghee roast', description: 'Rich, spicy, and indulgent chicken', price: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5OvGaGOZ1J2XaqjcFMFmtiXbF8qthXyHLTw&s' },
    { id: 8, name: 'Fish fry', description: 'Crispy, seasoned, and delicious fried fish', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDP18MnH0eEcHX6CoCWcRb87HY72kkBBhIw&s' },
    { id: 9, name: 'Egg roast', description: 'Spiced and savory hearty egg', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThW2fbx02IBpawgKjyO-BVTVrJpAYk2uGH_Q&s' },

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
      <>
      <NavPage/>
      <div className="container"
      style={
        {
          marginTop:580,
        }
      }>
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
                    <button style={{
                    backgroundColor:"#D9534f",borderRadius:5
                  }} onClick={() => addToCart(item)}>
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
      </>
    );
  };

export default Salads