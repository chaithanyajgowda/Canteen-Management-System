import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import HomePage from './Components/HomePage';
import SigninForm from './Components/SigninForm';
import MenuItem from './Components/MenuItem';
import './App.css'
import OrderSummary from './Components/OrderSummary';
import OrderConfirmation from './Components/OrderConfirmation';
import Cart from './Components/Cart';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SigninForm />} />
        <Route path="/MenuItem" element={<MenuItem/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<OrderSummary/>}/>
        <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
