import './styles/global.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import React from "react";
import TopBar from './components/TopBar';

function App() {

  return (
    <div className="container lg:max-w-[960px] mx-auto">
    <Router >
      <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App
