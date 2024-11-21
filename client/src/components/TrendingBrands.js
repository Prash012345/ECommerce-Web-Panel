import React from 'react';
import '../assets/TrendingBrands.css';  // Optional CSS for trending brands
const IMG_URL = process.env.REACT_APP_IMG_URL+"/trendings/"

const TrendingBrands = ({ brands }) => {
  return (
    <div className="trending-brands">
      <h2>Trending Brands</h2>
      <div className="brand-grid">
        {brands.map(brand => (
          <div key={brand._id} className="brand-item">
            <img src={`${IMG_URL}${brand.logoUrl}`} alt={brand.name} />
            <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBrands;
