import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList"; // Import the ProductList component
import Listing from "./components/Listing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} /> {/* Add this route */}
        <Route path="/listing" element={<Listing />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
