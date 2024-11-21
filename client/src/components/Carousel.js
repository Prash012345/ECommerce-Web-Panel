import React from 'react';
import '../assets/Carousel.css';  // Styling for carousel

const Carousel = ({ items }) => {
  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <img src={item.imageUrl} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
