import './styles/global.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import React from "react";
import TopBar from './components/TopBar';
import { CartContext, CartStorage } from './CartContext';
import Cart from './pages/Cart';

function App() {

  return (
    <div className="container lg:max-w-[960px] mx-auto">

      <Router >
        <CartStorage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartStorage>
      </Router>
    </div>

  )
}

export default App
