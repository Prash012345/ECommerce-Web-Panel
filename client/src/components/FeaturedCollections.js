import React from 'react';
// import '../../assets/FeaturedCollections.css';  // Optional CSS for featured collections
import '../assets/FeaturedCollections.css'; 

const IMG_URL = process.env.REACT_APP_IMG_URL+"/featured/"

const FeaturedCollections = ({ collections }) => {
  return (
    <div className="featured-collections">
      <h2>Featured Collections</h2>
      <div className="collection-grid">
        {collections.map(collection => (
          <div key={collection._id} className="collection-item">
            <img src={`${IMG_URL}${collection.imageUrl}`} alt={collection.name} />
            <h3>{collection.name}</h3>
            <p>{collection.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollections;
