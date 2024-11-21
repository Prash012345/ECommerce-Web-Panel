import React from 'react';
// import './FeaturedItems.css';  // Styling for featured items


const FeaturedItems = ({ items }) => {
  return (
    <div className="featured-items">
      <h2>Featured Clothing</h2>
      <div className="items-list">
        {items.map(item => (
          <div key={item._id} className="featured-item">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
