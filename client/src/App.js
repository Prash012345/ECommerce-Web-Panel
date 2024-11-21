import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ItemPage from './pages/ItemPage';
import ContactUs from './pages/ContactUs';
import './App.css';  // Global styling

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
