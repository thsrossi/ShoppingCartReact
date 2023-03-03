import './styles/global.css'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import React from "react";
import TopBar from './components/TopBar';
import { CartContext, CartStorage } from './CartContext';
import Cart from './pages/Cart';
import SucessBuy from './pages/SucessBuy';

function App() {

  return (
    <div className="container lg:max-w-[960px] mx-auto">

      <Router >
        <CartStorage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sucessbuy" element={<SucessBuy />} />
          </Routes>
        </CartStorage>
      </Router>
    </div>

  )
}

export default App
