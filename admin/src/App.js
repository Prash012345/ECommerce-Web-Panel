import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './pages/Dashboard';
import ItemManager from './pages/ItemManager';
import CategoryManager from './pages/CategoryManager';
import FeaturedCollectionManager from './pages/FeaturedCollectionManager';
import PromotionManager from './pages/PromotionManager';
import TrendingBrandManager from './pages/TrendingBrandManager';
import ContactManagement from './pages/ContactManagement';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<CategoryManager />} />
        <Route path="/items" element={<ItemManager />} />
        <Route path="/register" element={<Register />} />
        <Route path="/featured" element={<FeaturedCollectionManager />} />
        <Route path="/promotion" element={<PromotionManager />} />
        <Route path="/trending" element={<TrendingBrandManager />} />
        <Route path="/contact" element={<ContactManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
