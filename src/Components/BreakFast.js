import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import NavPage from './NavPage';

const BreakFast = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const menuItems = [
    { id: 1, name: 'Tea', description: 'Mine Fresh tea With Gingers', price: 15, image: 'https://t3.ftcdn.net/jpg/04/51/56/06/240_F_451560606_aEjtS2H5pPCRN755Huh30srtyl2BY3XQ.jpg' },
    { id: 2, name: 'Coffee', description: 'Refresh your mind with our Coffee', price: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1aJrTko9XvXRJdz_aRUgjN0vfS6C_PsSx_t6CE5EW_NQOIoWdMpwn-H5NzdvLCAaniA&usqp=CAU' },
    { id: 3, name: 'Idli', description: 'Best idli and sambar and chutney', price: 45, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4t2PpS3UFv8nuZNjKHmytFq7uZKzda1YScg&s' },
    { id: 4, name: 'Masala dosa', description: 'Crispy crepe, spiced potato filling, served with chutney and sambar', price: 50, image: 'https://t4.ftcdn.net/jpg/06/79/57/39/240_F_679573981_lgEavU94rIMx7CPNLsexqaDdRSGoMloY.jpg' },
    { id: 5, name: 'Pulav', description: 'Flavored rice with vibrant veggies', price: 40, image: 'https://t3.ftcdn.net/jpg/06/07/30/22/240_F_607302256_uGrGq4ZeG7ropzZSfLPdKnh8BdttRQ3W.jpg' },
    { id: 6, name: 'Poori', description: 'Fluffy, deep-fried poori with potato baji', price: 40, image: 'https://t3.ftcdn.net/jpg/05/00/04/18/240_F_500041894_FIwsCmxDUhLayLRXYAIzpaDSAWaZ3IZe.jpg' },
    { id: 7, name: 'Set dosa', description: 'Fluffy rice dosa with coconut chutney and sambar.', price: 30, image: 'https://tse1.mm.bing.net/th?id=OIP.x_gffx1Rw7yIBF7vu1THqwHaGB&pid=Api&P=0&h=180' },
    { id: 8, name: 'Benne dosa', description: 'Buttery golden dosa basically a crispy hug on plate', price: 50, image: 'https://t4.ftcdn.net/jpg/05/72/45/69/240_F_572456965_AqzSGzHoKpo5sRrOfXJYWhLf2AhHnlAa.jpg' },
    { id: 9, name: 'Bisi bele bath', description: 'The ultimate spicy rice and comfort food with kick', price: 40, image: 'https://t3.ftcdn.net/jpg/06/89/49/54/240_F_689495404_4Mq0Ux1Pl2DTUGkOT5GZJWHQabkGgWmY.jpg' },
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
    <NavPage />
    <div className="container" style={
      {
        marginTop:580,
      }
    }>
      <NavPage 
      />
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
                    backgroundColor:"#ff5722",borderRadius:5
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

export default BreakFast;
