import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import NavPage from './NavPage';

function FastFood() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
  
    const menuItems = [
        { id: 1, name: 'Fried rice', description: 'where every bite is a flavour adventure', price: 60, image: 'https://tse4.mm.bing.net/th?id=OIP.QgkDVftXRBqeBC_DWrpqEAAAAA&pid=Api&P=0&h=180' },
    { id: 2, name: 'Noodles', description: 'Twirling tales of savory satisfaction in every slurp', price: 60, image: 'https://tse4.mm.bing.net/th?id=OIP.09EGa7wu6o4TJ79OWaWgJAHaGA&pid=Api&P=0&h=180' },
    { id: 3, name: 'Roll', description: 'Like a tasty secret tucked in a portable blanket', price: 65, image: 'https://tse2.mm.bing.net/th?id=OIP.Xss8ocHZErsPgwgB5F1WIwHaEK&pid=Api&P=0&h=180' },

    { id: 4, name: 'Gobi manchurain', description: 'couliflower with spicy crispy ', price: 50, image: 'https://tse1.mm.bing.net/th?id=OIP.B17phfRLti8hFW0ysv-fggHaD2&pid=Api&P=0&h=180' },
    { id: 5, name: 'Paneer Tikka', description: 'paneer cube partying hard with tandoori spices', price: 75, image: 'https://tse3.mm.bing.net/th?id=OIP.X8yUUOFF7u3vVYCULBp0jAHaLH&pid=Api&P=0&h=180' },
    { id: 6, name: 'Baby corn fry', description: 'Miniature mischief with a crunch that delights', price: 30, image: 'https://tse4.mm.bing.net/th?id=OIP.8T81qPa22JEU9AlLA8FXIgHaFj&pid=Api&P=0&h=180' },


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
          marginTop:200,
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

export default FastFood