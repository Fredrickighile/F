import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/home';
import { Routes, Route } from 'react-router-dom';
import Services from './Components/Services';
import Products from './Components/Products';
import SignUp from './Components/SignUp';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
